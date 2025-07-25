from sqlmodel import Session, select, Enum
from models import Users, Room, Idea, Status
from passlib.hash import bcrypt


# Generate mock data

def generate_mock_data(session: Session):
    
    # Create Users
    user1 = create_user_in_db(session, "alice_mock", "pwd_alice")
    user2 = create_user_in_db(session, "bob_mock", "pwd_bob")
    user3 = create_user_in_db(session, "charlie_mock", "pwd_charlie")

    # Create Rooms
    room1 = create_room_in_db(session, "Brainstorming Session A", Status.open)
    room2 = create_room_in_db(session, "Project Alpha Planning", Status.open)
    room3 = create_room_in_db(session, "Archived Ideas", Status.close)

    session.commit()

    # Create ideas
    create_idea_in_db(session, userID=user1.id, roomID=room1.id, content="Improve UX for mobile app")
    create_idea_in_db(session, userID=user2.id, roomID=room1.id, content="New feature: collaborative editing")
    create_idea_in_db(session, userID=user1.id, roomID=room2.id, content="Optimize backend queries for dashboard")
    create_idea_in_db(session, userID=user3.id, roomID=room3.id, content="Old idea: VR meeting space (archived)")

    session.commit()

    


# Users

def create_user_in_db(session: Session, username: str, password: str):
    hashed_password = bcrypt.hash(password)
    user = Users(username=username, password=hashed_password)
    
    session.add(user)

    return user

def get_all_users(session: Session):
    statement = select(Users)
    results = session.exec(statement)
    users = results.all()
    
    return users

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
    
# Idea

def create_idea_in_db(session: Session, userID:int, roomID: int, content: str):
    idea = Idea(userID=userID, roomID=roomID, content=content)

    session.add(idea)
    session.commit()
    session.refresh(idea)
    
    return idea

def get_all_ideas_in_db(session: Session):
    statement = select(Idea)
    results = session.exec(statement)
    ideas = results.all()

    return ideas

# Room

def create_room_in_db(session: Session, topic: str, status: Status):
    room = Room(topic=topic, status=status)

    session.add(room)
    session.commit()
    session.refresh(room)

    return room

def get_all_room_in_db(session: Session):
    statement = select(Room)
    results = session.exec(statement)
    rooms = results.all()

    return rooms



