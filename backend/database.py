from sqlmodel import Field, SQLModel, create_engine, Session, select
from models import Users

engine = create_engine('postgresql://admin:1234@localhost:5432/myDB', echo=True)

def create_user():
    user1 = Users(username="user1", password="pwd1")
    user2 = Users(username="user2", password="pwd2")
    user3 = Users(username="user3", password="pwd3")

    with Session(engine) as session:
        session.add(user1)
        session.add(user2)
        session.add(user3)

        session.commit()


def create_db_and_tables(): 
    # 1. Drop existing tables (BE CAREFUL WITH THIS IN PRODUCTION!)
    SQLModel.metadata.drop_all(engine)
    # 2. Create tables with the correct schema
    SQLModel.metadata.create_all(engine)

    
def delete_user():
     with Session(engine) as session:
          statement = select(Users).where(Users.id == 5)
          result = session.exec(statement)
          user = result.one()
        #   print(user)

          session.delete(user)
          session.commit()


def get_session():
     with Session(engine) as session:
          yield session

def main():
    create_db_and_tables()
    # create_user()
    # delete_user()
    pass

if __name__ == "__main__":
        main()