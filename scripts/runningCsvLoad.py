from sqlalchemy import create_engine
import pymysql
import pandas as pd

from mysql.connector import Error
try:
    sqlEngine = create_engine('mysql+pymysql://eekhoorntje:mysqlpass@127.0.0.1/running', pool_recycle=3600)
    dbConnection = sqlEngine.connect()
    
    df = pd.read_csv('/home/eekhoorntje/git/running_rest_app/data/runningdata.csv', index_col=False, delimiter = ',')
    numRows = len(df.index)
    print(numRows)
    df.to_sql("garminActivities", dbConnection, if_exists='append', index=False)
    
except Error as e:
    print("Error while connecting to MySQL", e)
finally:
    dbConnection.close()
