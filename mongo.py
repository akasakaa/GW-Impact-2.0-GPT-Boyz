from pymongo import MongoClient


MONGO_URI = "mongodb+srv://hrithikbcd23:Retardestshit12@cluster0.ezqmokg.mongodb.net/crud?retryWrites=true&w=majority&appName=Cluster0"


client = MongoClient(MONGO_URI)


db = client["testimpact"]

def insertcollection(input,output):
    collection=db["prompts"]
    data={"input":str({input}),"output":str({output})}
    collection.insert_one(data)
    print(data)



