from fastapi import FastAPI
import uuid

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/uuid")
def createUUID():
    return uuid.uuid4()