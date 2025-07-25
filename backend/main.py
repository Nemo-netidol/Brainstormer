from fastapi import FastAPI, Depends
import uuid
import services, database
from sqlmodel import Session, select
from models import Users, Room, Idea, Status


def get_db_session():
    yield from database.get_session()

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/uuid")
def createUUID():
    return uuid.uuid4()


@app.post("/insert-mock-data/")
def mock_data(session: Session=Depends(get_db_session)):
    services.generate_mock_data(session=session)


@app.post("/users/")
def create_user(*, session: Session=Depends(get_db_session), username: str, password: str):
    user = services.create_user_in_db(session, username, password)
    session.commit()
    session.refresh(user)
    
    return {"message: ": f"User '{user.username}'created successfully", "userID": user.id}


@app.get("/users/get-all-user")
def get_all_users(session: Session=Depends(get_db_session)):
    users = services.get_all_users(session=session)
    return users


@app.post("/users/delete-all")
def delete_all_user(session: Session=Depends(get_db_session)):
    res = services.delete_all_user(session)
    if res:
        return {"message": "Successfully deleted all users"}
    else:
        return {"error": "somehow error!"}
    

@app.post("/users/validation")
def validate(*, session: Session=Depends(get_db_session), username: str, password: str): 
    isValid = services.validate_user(session, username=username, plain_password=password)
    if isValid:
        return {"message": "Successfully validate the user!"}
    else:
        return {"error": "user credential is incorrect."}
    
@app.post("/room/create")
def create_room(*, session: Session=Depends(get_db_session), topic:str, status: Status):
    room = services.create_room(session=session, topic=topic, status=status)
    session.commit()
    session.refresh(room)
    
    return {"message": f"room id: {room.ID} created successfully"}

@app.get("/room/get-all-room")
def get_all_rooms(session: Session=Depends(get_db_session)):
    rooms = services.get_all_room_in_db(session=session) 

    return rooms
    
@app.post("/idea/create")
def create_idea(*, session: Session=Depends(get_db_session), userID: int, roomID: int, content:str):
    idea = services.create_idea_in_db(session=session, userID=userID, roomID=roomID, content=content)

    session.commit()
    session.refresh(idea)

    return {"message": "Idea created successfully", "content": idea.content}

@app.get("/idea/get-all-idea")
def get_all_ideas(session: Session=Depends(get_db_session)):
    ideas = services.get_all_ideas_in_db(session)

    return ideas


@app.post("/db/generate-mock-data")
def generate_mock_data(session: Session=Depends(get_db_session)):
    services.generate_mock_data(session=session)

    return {"message": "mock data generated successfully"}