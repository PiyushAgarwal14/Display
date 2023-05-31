import numpy as np
from flask import Flask, request, jsonify, render_template
import pandas as pd
import pickle


app = Flask(__name__)
model = pickle.load(open('linearregression.pkl','rb')) 

@app.route('/')
def home():
  
    return render_template("index.html")
  
@app.route('/predict',methods=['GET'])
def predict():
    
    
    '''
    For rendering results on HTML GUI
    '''
    name = request.args.get('carname')
    company = request.args.get('company')
    year = int(request.args.get('year'))
    kms = int(request.args.get('kms'))
    fuel = request.args.get('fuel')


    prediction = int(model.predict(pd.DataFrame(columns=['name','company','year','kms_driven','fuel_type'],data=np.array([name,company,year,kms,fuel]).reshape(1,5))))


    return render_template('index.html', prediction_text='Regression Model has predicted Price of car is Rs.  : {}'.format(prediction))


if __name__ == "__main__":
    app.run(debug=True)