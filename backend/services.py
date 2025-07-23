from sqlmodel import Session, select
from models import Users, Room, Idea
from passlib.hash import bcrypt

def create_user(session: Session, username: str, password: str):
    hashed_password = bcrypt.hash(password)
    user = Users(username=username, password=hashed_password)
    
    session.add(user)
    session.commit()
    session.refresh(user)

    return user

def validate_user(session: Session, username: str, plain_password: str):
    statement = select(Users).where(Users.username == username)
    result = session.exec(statement)
    user = result.first()

    if bcrypt.verify(plain_password, user.password):
        return True
    else:
        return False
    

def delete_all_user(session: Session):
    statement = select(Users)
    results = session.exec(statement)

    for user in results:
        session.delete(user)
    
    session.commit()

    statement = select(Users)
    if session.exec(statement).first() == None:
        return True
    else:
        return False