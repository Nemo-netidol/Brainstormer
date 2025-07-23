from typing import Optional
from sqlmodel import Field, SQLModel, create_engine, Session, select, Relationship

class Users(SQLModel, table=True):
    id: int | None = Field(primary_key=True, default=None)
    username: str = Field()
    password: str = Field()

    ideas: list["Idea"] = Relationship(back_populates="user")


class Room(SQLModel, table=True):
    id: int | None = Field(primary_key=True, default=None)
    topic: str = Field()
    status: str = Field()

    ideas: list["Idea"] = Relationship(back_populates="room")

class Idea(SQLModel, table=True):
    id: int | None = Field(primary_key=True, default=None)
    userID: int = Field(foreign_key="users.id")
    vote: int = Field(default=0)
    roomID: int = Field(foreign_key="room.id")
    content: str = Field()

    user: Optional[Users] = Relationship(back_populates="ideas")
    room: Optional[Room] = Relationship(back_populates="ideas")
    