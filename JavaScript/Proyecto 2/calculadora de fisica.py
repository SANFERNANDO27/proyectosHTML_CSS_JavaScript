dato = input('ingresa lo que nececitas')
if dato == ('tiempo'):
	datotiempo = input('tienes altura o velocidad?')
	if datotiempo == ('velocidad'):
		vf = input('cual es tu vf?')
		vi = input('cual es tu vi?')
		res = int(vf)-int(vi)/int(-9.8)
		print(res)
