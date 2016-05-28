function getAnimalSound(animal) {
	animalSounds = {
		'cat': 'meow',
		'dog': 'woof',
		'monkey': 'hoodeyhoo',
		'cow': 'moo'
	};

	for (var i = 0; i < animalSounds.length; i++) {

		if( animalSounds[animal] === animal ) {
			return 'Is a valid animal';
		}else{
			return 'That is not a valid animal!';
		}
	}
}