from typing import Optional
import enum
from sqlmodel import Field, SQLModel, create_engine, Session, select, Relationship, Enum, Column
from sqlalchemy import Enum as SQLEnum 

class Users(SQLModel, table=True):
    id: int | None = Field(primary_key=True, default=None)
    username: str = Field()
    password: str = Field()

    ideas: list["Idea"] = Relationship(back_populates="user")


class Status(str, enum.Enum):
    open = "open"
    close = "close"

class Room(SQLModel, table=True):
    id: int | None = Field(primary_key=True, default=None)
    topic: str = Field()
    status: Status = Field(sa_column=Column(SQLEnum(Status)), default=Status.open)

    ideas: list["Idea"] = Relationship(back_populates="room")

class Idea(SQLModel, table=True):
    id: int | None = Field(primary_key=True, default=None)
    userID: int = Field(foreign_key="users.id")
    vote: int = Field(default=0)
    roomID: int = Field(foreign_key="room.id")
    content: str = Field()

    user: Optional[Users] = Relationship(back_populates="ideas")
    room: Optional[Room] = Relationship(back_populates="ideas")
    