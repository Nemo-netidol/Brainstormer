from fastapi import FastAPI, Depends
import uuid
import services, database
from sqlmodel import Session, select

def get_db_session():
    yield from database.get_session()

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/uuid")
def createUUID():
    return uuid.uuid4()

@app.post("/users/")
def create_user(*, session: Session=Depends(get_db_session), username: str, password: str):
    user = services.create_user(session, username, password)
    return {"message: ": f"User created successfully", "user": user.username}


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