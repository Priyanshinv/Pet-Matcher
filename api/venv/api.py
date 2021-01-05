import time
from flask import Flask
from flask import request
from flask import jsonify
import numpy as np
import pickle

app = Flask(__name__)
	
@app.route('/match', methods=['POST', 'GET'])
def get_matching_pet():
	dict1 = {"Labrador Retriever":[3,"Yes","No",2,4,"No","Yes"], "Beagle":[1,"Yes","Yes",3,3,"No","Yes"], "Shih Tzu":[1,"Yes","Yes",4,2,"Yes","Yes"], "Havanese":[1,"No","No",3,2,"Yes","Yes"], "English Springer Spaniel":[2,"No","No",2,2,"No","Yes"], "Bichon Frise":[1,"Yes","Yes",5,2,"No","Yes"], "German Shorthaired Pointer":[2,"Yes","No",2,4,"No","Yes"], "Cavalier King Charles Spaniel":[1,"Yes","Yes",2,1,"Yes","Yes"], "Cocker Spaniel":[1,"Yes","Yes",4,2,"No","Yes"], "Collie":[2,"Yes","No",3,2,"No","Yes"], "Bloodhound":[3,"No","No",2,2,"No","Yes"], "Bernese Mountain Dog":[4,"No","Yes",3,3,"No","No"], "Mastiff":[4,"Yes","No",1,3,"No","No"], "Basset Hound":[2,"Yes","Yes",3,1,"No","Yes"], "Rhodesian Ridgeback":[3,"Yes","No",2,2,"No","Yes"], "Newfoundland":[4,"Yes","Yes",2,2,"No","No"], "French Bulldog":[1,"Yes","No",1,1,"No","Yes"], "Great Dane":[4,"No","No",1,3,"No","No"], "Boston Terrier":[1,"Yes","No",2,2,"No","Yes"], "Bulldog":[2,"No","No",3,2,"No","Yes"], "Shetland Sheepdog":[1,"Yes","Yes",3,2,"No","Yes"]}
	#dogs_list = ["Labrador Retriever", "Beagle", "Shih Tzu", "Havanese", "English Springer Spaniel", "Bichon Frise", "German Shorthaired Pointer", "Cavalier King Charles Spaniel", "Cocker Spaniel", "Collie", "Bloodhound", "Bernese Mountain Dog", "Mastiff", "Basset Hound", "Rhodesian Ridgeback", "Newfoundland", "French Bulldog", "Great Dane", "Boston Terrier", "Bulldog", "Shetland Sheepdog"]
	scores = {"Labrador Retriever":0, "Beagle":0, "Shih Tzu":0, "Havanese":0, "English Springer Spaniel":0, "Bichon Frise":0, "German Shorthaired Pointer":0, "Cavalier King Charles Spaniel":0, "Cocker Spaniel":0, "Collie":0, "Bloodhound":0, "Bernese Mountain Dog":0, "Mastiff":0, "Basset Hound":0, "Rhodesian Ridgeback":0, "Newfoundland":0, "French Bulldog":0, "Great Dane":0, "Boston Terrier":0, "Bulldog":0, "Shetland Sheepdog":0}
	cluster = {0:["Labrador Retriever", "Beagle", "Shih Tzu", "Havanese", "English Springer Spaniel", "Bichon Frise", "German Shorthaired Pointer", "Cavalier King Charles Spaniel", "Cocker Spaniel", "Collie", "Bloodhound", "Bernese Mountain Dog", "Mastiff", "Basset Hound", "Rhodesian Ridgeback", "Newfoundland"], 1:["French Bulldog", "Great Dane", "Boston Terrier", "Bulldog", "Shetland Sheepdog","Labrador Retriever", "Beagle", "Shih Tzu", "Havanese", "English Springer Spaniel", "Bichon Frise"], 2:["German Shorthaired Pointer", "Cavalier King Charles Spaniel", "Cocker Spaniel", "Collie", "Bloodhound"], 3:["French Bulldog", "Great Dane", "Boston Terrier", "Bulldog", "Shetland Sheepdog"], 4:["French Bulldog", "Great Dane", "Boston Terrier", "Bulldog", "Shetland Sheepdog","German Shorthaired Pointer", "Cavalier King Charles Spaniel", "Cocker Spaniel", "Collie", "Bloodhound","Bernese Mountain Dog", "Mastiff", "Basset Hound", "Rhodesian Ridgeback", "Newfoundland"]}

	with open(f'model.pkl', 'rb') as f:
			model = pickle.load(f)
	if request.method == 'POST':
		req = request.json
		print(req)
		#X = np.array([1, 2, 2, 3, 3, 1, 5, 5, 4, 4, 4, 5, 2, 3, 3, 2, 3, 4, 2, 4, 5, 2, 3, 1, 1, 1, 2, 2, 3, 4, 3, 2, 4, 3, 5, 5, 2, 1, 1, 1, 5, 3, 3, 3, 3, 3, 3, 1, 1, 2])
		X = np.array([req['EXT1'],req['EXT2'],req['EXT3'],req['EXT4'],req['EXT5'],req['EXT6'],req['EXT7'],req['EXT8'],req['EXT9'],req['EXT10'],req['EST1'],req['EST2'],req['EST3'],req['EST4'],req['EST5'],req['EST6'],req['EST7'],req['EST8'],req['EST9'],req['EST10'],req['AGR1'],req['AGR2'],req['AGR3'],req['AGR4'],req['AGR5'],req['AGR6'],req['AGR7'],req['AGR8'],req['AGR9'],req['AGR10'],req['CSN1'],req['CSN2'],req['CSN3'],req['CSN4'],req['CSN5'],req['CSN6'],req['CSN7'],req['CSN8'],req['CSN9'],req['CSN10'],req['OPN1'],req['OPN2'],req['OPN3'],req['OPN4'],req['OPN5'],req['OPN6'],req['OPN7'],req['OPN8'],req['OPN9'],req['OPN10']])
		X = X.reshape(1,-1)
		X1 = np.array([req['QUESTION1'], req['QUESTION2'], req['QUESTION3'], req['QUESTION4'], req['QUESTION5'], req['QUESTION6'], req['QUESTION7']])
		print(X)
		prediction = model.predict(X)[0];
		print(prediction)
		dogs_list = cluster[prediction]
		for dog in dogs_list:
			count = 0
			inner_list = dict1[dog]
			if inner_list[0]<=X1[0]:
				count = count+1
			if X1[1]=="Yes" and inner_list[1]=="Yes":
				count = count + 1
			if X1[1]=="No":
				count = count+1
			if X1[2]=="Yes" and inner_list[2]=="Yes":
				count = count + 1
			if X1[2]=="No":
				count = count+1
			if inner_list[3]<=X1[3]:
				count = count+1
			if inner_list[4]<=X1[4]:
				count = count+1
			if X1[5]=="Yes" and inner_list[5]=="Yes":
				count = count + 1
			if X1[5]=="No":
				count = count+1
			if X1[6]=="Yes" and inner_list[6]=="Yes":
				count = count + 1
			if X1[6]=="No":
				count = count+1
			scores[dog]=count
		scores = sorted(scores.items(), key=lambda x: x[1], reverse=True)
		print(scores)
		return jsonify(first=scores[0][0], second=scores[1][0], third=scores[2][0], fourth=scores[3][0])
