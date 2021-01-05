import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import ckcs from './Cavalier_King_Charles_Spaniel.jpg'
import cs from './Cocker_Spaniel.jpg'
import lr from './Labrador_Retriever.jpg'
import beagle from './beagle.jpg'
import st from './Shih_Tzu.jpg'
import havenese from './Havanese.jpg'
import ess from './English_Springer_Spaniel.jpg'
import bf from './Bichon_Frise.jpg'
import gsp from './German_Shorthaired_Pointer.jpg'
import collie from './Collie.jpg'
import bh from './Bloodhound.jpg'
import bmd from './Bernese_Mountain_Dog.jpg'
import mastiff from './Mastiff.jpg'
import basset from './Basset_Hound.jpg'
import rr from './Rhodesian_Ridgeback.jpg'
import n from './Newfoundland.jpg'
import fb from './French_Bulldog.jpg'
import gd from './Great_Dane.jpg'
import bt from './Boston_Terrier.jpg'
import bull from './bull.jpg'
import ss from './Shetland_Sheepdog.jpg'


class Result extends Component {
	constructor(props){
		console.log("Const result called");
		super(props);
		this.state={
			firstBackUp:"",
			first:"",
			second:"",
			third:"",
			fourth:"",
			showImageCard: true
		};
		this.imageSecondClick = this.imageSecondClick.bind(this);
		this.imageThirdClick = this.imageThirdClick.bind(this);
		this.imageFourthClick = this.imageFourthClick.bind(this);
		this.resultClick = this.resultClick.bind(this);
		
	}
	componentWillMount(){
		console.log("Answers");
		console.log(this.props.answers);
	  fetch('/match',{
		  method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify(this.props.answers), 
	  }).then(res => res.json())
      .then(res => this.setState({firstBackUp: res.first, first: res.first, second: res.second, third: res.third, fourth: res.fourth}));		
	}
	imageSecondClick(){
		console.log("In click")
		this.setState({first: this.state.second, showImageCard: false})
	}
	imageThirdClick(){
		console.log("In click")
		this.setState({first: this.state.third, showImageCard: false})
	}
	imageFourthClick(){
		console.log("In click")
		this.setState({first: this.state.fourth, showImageCard: false})
	}
	resultClick(){
		this.setState({first: this.state.firstBackUp, showImageCard: true})
	}
  render() {
	  const dict1 = {"Cavalier King Charles Spaniel":[ckcs, "The Cavalier’s all-around beauty, regal grace, and even temper mark him as one of dogdom’s noblemen. A toy spaniel no more than 13 inches high, the Cavalier draws you in with his face: The sweet, gentle, melting expression emanating from large, round eyes is a breed hallmark. Another is the silky, richly-colored coat that can be one of four distinct varieties. Cavaliers may be aristocrats, but they gladly descend from their royal high horse for a backyard frolic or a squirrel chase. They get along nicely with children and other dogs. Adaptable Cavaliers do equally well with active owners and homebodies—they can be upbeat athletes or shameless couch potatoes, depending on an owner’s lifestyle.", "Affectionate, Gentle, Graceful"], "Cocker Spaniel":[cs, "Those big, dark eyes; that sweet expression; those long, lush ears that practically demand to be touched—no wonder the Cocker spent years as America’s most popular breed. The Cocker is the AKC’s smallest sporting spaniel, standing about 14 to 15 inches. The coat comes in enough colors and patterns to please any taste. The well-balanced body is sturdy and solid, and these quick, durable gundogs move with a smooth, easy gait.Cockers are eager playmates for kids and are easily trained as companions and athletes. They are big enough to be sporty, but compact enough to be portable. A Cocker in full coat rewards extra grooming time by being the prettiest dog on the block. These energetic sporting dogs love playtime and brisk walks.","Gentle, Smart, Happy"], "Labrador Retriever":[lr,"The sturdy, well-balanced Labrador Retriever can, depending on the sex, stand from 21.5 to 24.5 inches at the shoulder and weigh between 55 to 80 pounds. The dense, hard coat comes in yellow, black, and a luscious chocolate. The head is wide, the eyes glimmer with kindliness, and the thick, tapering “otter tail” seems to be forever signaling the breed’s innate eagerness. Labs are famously friendly. They are companionable housemates who bond with the whole family, and they socialize well with neighbor dogs and humans alike. But don’t mistake his easygoing personality for low energy: The Lab is an enthusiastic athlete that requires lots of exercise, like swimming and marathon games of fetch, to keep physically and mentally fit","Friendly, Active, Outgoing"], "Beagle":[beagle,"There are two Beagle varieties: those standing under 13 inches at the shoulder, and those between 13 and 15 inches. Both varieties are sturdy, solid, and “big for their inches,” as dog folks say. They come in such pleasing colors as lemon, red and white, and tricolor. The Beagle’s fortune is in his adorable face, with its big brown or hazel eyes set off by long, houndy ears set low on a broad head. A breed described as “merry” by its fanciers, Beagles are loving and lovable, happy, and companionable—all qualities that make them excellent family dogs. No wonder that for years the Beagle has been the most popular hound dog among American pet owners. These are curious, clever, and energetic hounds who require plenty of playtime.","Friendly, Curious, Merry"],"Shih Tzu":[st,"Shih Tzu (pronounced in the West “sheed-zoo” or “sheet-su”; the Chinese say “sher-zer”), weighing between 9 to 16 pounds, and standing between 8 and 11 inches, are surprisingly solid for dogs their size. The coat, which comes in many colors, is worth the time you will put into it—few dogs are as beautiful as a well-groomed Shih Tzu. Being cute is a way of life for this lively charmer. The Shih Tzu is known to be especially affectionate with children. As a small dog bred to spend most of their day inside royal palaces, they make a great pet if you live in an apartment or lack a big backyard. Some dogs live to dig holes and chase cats, but a Shih Tzu’s idea of fun is sitting in your lap acting adorable as you try to watch TV.","Affectionate, Playful, Outgoing"], "Havanese":[havenese,"Distinctive features of the Havanese include a curled-over tail and a gorgeous silky coat, which comes in a variety of colors. Some owners enjoy cording the coat, in the manner of a Puli, and others clip it short to reduce grooming time. Happily, Havenese are just as cute no matter what hairdo you give them. Their small but sturdy bodies, adaptable nature, and social skills make Havanese an ideal city dog, but they are content to be anywhere that they can command the attention of admirers young and old alike. Havanese, smart and trainable extroverts with the comic instincts of a born clown, are natural trick dogs. Havanese are also excellent watchdogs and take the job seriously, but will usually keep the barking to a minimum","Intelligent, Outgoing, Funny"],"English Springer Spaniel":[ess,"Built for long days in the field, English Springer Spaniels are tough, muscular hunters standing 19 to 20 inches at the shoulder and weighing between 40 and 50 pounds. The double coat comes in several colors and patterns, the ears are long and lush, and the kindly, trusting expression of the eyes is a cherished hallmark of the breed. Springers move with a smooth, ground-covering stride. Bred to work closely with humans, Springers are highly trainable people-pleasers. They crave company and are miserable when neglected. Polite dogs, Springers are good with kids and their fellow mammals. They are eager to join in any family activity. Long walks, games of chase and fetch, and swimming are favorite pastimes of these rugged spaniels","Friendly, Playful, Obedient"],"Bichon Frise":[bf,"A good-size Bichon will stand a shade under a foot tall at the shoulder. The breed’s glory is a white hypoallergenic coat, plush and velvety to the touch, featuring rounded head hair that sets off the large, dark eyes and black leathers of the nose and lips. Bichons are adaptable companions who get on well with other dogs and children. Alert and curious, Bichons make nice little watchdogs—but they are lovers, not fighters, and operate under the assumption that there are no strangers, just friends they haven’t met yet. Their confidence and size make them ideal city dogs. Bichons train nicely and enjoy performing for their loved ones. Finally, there’s the happy-go-lucky Bichon personality that draws smiles and hugs wherever they go","Playful, Curious, Peppy"], "German Shorthaired Pointer":[gsp,"Male German Shorthaired Pointers stand between 23 and 25 inches at the shoulder and weigh anywhere from 55 to 70 pounds; females run smaller. The coat is solid liver (a reddish brown), or liver and white in distinctive patterns. The dark eyes shine with enthusiasm and friendliness. Built to work long days in the field or at the lake, GSPs are known for power, speed, agility, and endurance. “Noble” and “aristocratic” are words often used to describe the overall look. GSPs make happy, trainable pets who bond firmly to their family. They are always up for physical activities like running, swimming, organized dog sports—in fact, anything that will burn some of their boundless energy while spending outdoors time with a human buddy","Friendly, Smart, Willing to Please"],"Collie":[collie,"The Collie is a large but lithe herder standing anywhere from 22 to 26 inches tall. The rough variety boasts one of the canine kingdom’s most impressively showy coats; the smooth coat’s charms are subtler but no less satisfying. Coat colors in both varieties are sable and white, tricolor, blue merle, or white. Collie fanciers take pride in their breed’s elegant wedge-shaped head, whose mobile ears and almond eyes convey a wide variety of expressions. Collies are famously fond of children and make wonderful family pets. These swift, athletic dogs thrive on companionship and regular exercise. With gentle training, they learn happily and rapidly. The Collie’s loyalty, intelligence, and sterling character are the stuff of legend","Devoted, Graceful, Proud"],"Bloodhound":[bh,"Bloodhounds are large, substantial dogs standing 23 to 27 inches at the shoulder and weighing up to 110 pounds. Their most famous features are a long, wrinkled face with loose skin; huge, drooping ears; and warm, deep-set eyes that complete an expression of solemn dignity. Coat colors can be black and tan, liver and tan, or red. Powerful legs allow Bloodhounds to scent over miles of punishing terrain. As pack dogs, Bloodhounds enjoy company, including other dogs and kids. They are easygoing, but their nose can sometimes lead them into trouble. A strong leash and long walks in places where they can enjoy sniffing around are recommended. Bloodhounds are droolers, and obedience training these sensitive sleuths can be a challenge","Friendly, Independent, Inquisitive"], "Bernese Mountain Dog":[bmd,"The Bernese Mountain Dog is a large, sturdy worker who can stand over 27 inches at the shoulder. The thick, silky, and moderately long coat is tricolored: jet black, clear white, and rust. The distinctive markings on the coat and face are breed hallmarks and, combined with the intelligent gleam in the dark eyes, add to the Berner’s aura of majestic nobility. A hardy dog who thrives in cold weather, the Berner’s brain and brawn helped him multitask on the farms and pastures of Switzerland. Berners get along with the entire family and are particularly gentle with children, but they will often become more attached to one lucky human. Berners are imposing but not threatening, and they maintain an aloof dignity with strangers.","Good-Natured, Calm, Strong"], "Mastiff":[mastiff,"For the uninitiated, a face-to-face encounter with these black-masked giants can be startling. A male stands at least 30 inches at the shoulder and can outweigh many a full-grown man. The rectangular body is deep and thickly muscled, covered by a short double coat of fawn, apricot, or brindle stripes. The head is broad and massive, and a wrinkled forehead accentuates an alert, kindly expression. Mastiffs are patient, lovable companions and guardians who take best to gentle training. Eternally loyal Mastiffs are protective of family, and a natural wariness of strangers makes early training and socialization essential. Mastiffs are magnificent pets, but acquiring a powerful giant-breed dog is commitment not to be taken lightly.","Courageous, Dignified, Good-Natured"], "Basset Hound":[basset,"The Basset Hound stands no higher than 14 inches at the shoulder but, with his remarkably heavy bone, powerful little legs, and massive paws, he possesses big-dog strength and stamina. Bassets are famous for a large, domed head that features extremely long, velvety ears, mournful eyes, and a wrinkled brow, which give the breed the look of a sad clown. Built more for endurance than speed, the Basset moves in a deliberate but effortless manner. The breed’s scenting ability is uncanny; it’s said that among dogs only the Bloodhound’s nose is more accurate. Mild and agreeable at home, the Basset is stubborn on the trail and barks in a loud, ringing voice. Although they may not be wildly demonstrative in their affections, they are steadfastly loyal.","Charming, Patient, Low-Key"], "Rhodesian Ridgeback":[rr,"Beneath the Ridgeback’s trademark ridge is a whole lot of hound: Ridgebacks are fast and powerful athletes who can weigh between 70 and 85 pounds, and oftentimes more. They come in only one color – wheaten – which spans every shade seen in a wheat field, from pale flaxen to the burnished red of a maturing crop. Ridgebacks also have two nose colors: black and the less commonly seen brown.The formidable Ridgeback can be strong willed, independent, and sometimes domineering. Ridgebacks must be guided with a firm but fair hand from puppyhood. They are faithful friends, protective of their loved ones and meltingly affectionate with those whom they trust. Still, a Ridgeback can be too much hound for the novice dog owner","Affectionate, Dignified, Even-Tempered"],"Newfoundland":[n,"A male Newfoundland can weigh up to 150 pounds and stand 28 inches at the shoulder; females typically go 100 to 120 pounds. The Newf head is majestic, the expression soft and soulful. The outer coat is flat and coarse. Colors are gray, brown, black, and a black-and-white coat named for artist Sir Edwin Landseer, who popularized the look in his paintings. The Newfie breed standard says that a sweet temperament is the “most important single characteristic of the breed.” The Newf’s sterling character is expressed in their affinity for kids. Trusting and trainable, Newfs respond well to gentle guidance. These noble giants are among the world’s biggest dogs, and acquiring a pet that could outweigh you comes with obvious challenges","Sweet, Patient, Devoted"], "French Bulldog":[fb,"The French Bulldog resembles a Bulldog in miniature, except for the large, erect “bat ears” that are the breed’s trademark feature. The head is large and square, with heavy wrinkles rolled above the extremely short nose. The body beneath the smooth, brilliant coat is compact and muscular. The bright, affectionate Frenchie is a charmer. Dogs of few words, Frenchies don’t bark much—but their alertness makes them excellent watchdogs. They happily adapt to life with singles, couples, or families, and do not require a lot of outdoor exercise. They get on well with other animals and enjoy making new friends of the human variety. It is no wonder that city folk from Paris to Peoria swear by this vastly amusing and companiable breed","Adaptable, Playful, Smart"], "Great Dane":[gd,"As tall as 32 inches at the shoulder, Danes tower over most other dogs—and when standing on their hind legs, they are taller than most people. These powerful giants are the picture of elegance and balance, with the smooth and easy stride of born noblemen. The coat comes in different colors and patterns, perhaps the best-known being the black-and-white patchwork pattern known as “harlequin.” Despite their sweet nature, Danes are alert home guardians. Just the sight of these gentle giants is usually enough to make intruders think twice. But those foolish enough to mistake the breed’s friendliness for softness will meet a powerful foe of true courage and spirit. Patient with kids, Danes are people pleasers who make friends easily","Friendly, Patient, Dependable"], "Boston Terrier":[bt,"Boston Terriers are compact, short-tailed, well-balanced little dogs weighing no more than 25 pounds. The stylish “tuxedo” coat can be white and either black, brindle, or seal (black with a red cast when viewed in sun or bright light). The head is square, the muzzle is short, and the large, round eyes can shine with kindness, curiosity, or mischief. Ever alert to their surroundings, Bostons move with a jaunty, rhythmic step. It’s a safe bet that a breed named for a city—the Havanese or Brussels Griffon, for instance—will make an excellent urban pet. Bostons are no exception: they are sturdy but portable, people-oriented, and always up for a brisk walk to the park or outdoor cafe. A bright dog with a natural gift for comedy, the dapper Bostonian is a steady source of smiles","Friendly, Bright, Amusing"], "Bulldog":[bull,"You can’t mistake a Bulldog for any other breed. The loose skin of the head, furrowed brow, pushed-in nose, small ears, undershot jaw with hanging chops on either side, and the distinctive rolling gait all practically scream “I’m a Bulldog!” The coat, seen in a variety of colors and patterns, is short, smooth, and glossy. Bulldogs can weigh up to 50 pounds, but that won’t stop them from curling up in your lap, or at least trying to. But don’t mistake their easygoing ways for laziness—Bulldogs enjoy brisk walks and need regular moderate exercise, along with a careful diet, to stay trim. Summer afternoons are best spent in an air-conditioned room as a Bulldog’s short snout can cause labored breathing in hot and humid weather.","Friendly, Courageous, Calm"], "Shetland Sheepdog":[ss,"The Shetland Sheepdog is a small, active, and agile herding dog standing between 13 and 16 inches at the shoulder. The long coat is harsh and straight, with a dense undercoat, and comes in black, blue merle, and sable, with white markings. The coat, along with a long, wedge-shaped head; small, three-quarter erect ears; and deep-chested, level-backed torso, give Shelties the look of a rough-coated Collie in miniature. Bright and eager Shelties are easy trainers and world-class competitors in obedience, agility, and herding trials. They are sensitive and affectionate family dogs, highly in tune with the mood of the household. They like to bark and tend to be reserved toward strangers—two qualifications of an excellent watchdog","Playful, Energetic, Bright"]}
	  let elem;
	  const first = this.state.first
	  const second = this.state.second
	  const third = this.state.third
	  const fourth = this.state.fourth
	  if(first){
	  elem = 
	  <div>
	  <div style={{backgroundColor:"black", color:"white"}}><br/>
	  {this.state.showImageCard &&
	  <h5><center>- YOUR IDEAL PET -</center></h5>}
	  <h3><center>{first}</center></h3><br/>
	  </div>
	  <div>
	  <img src={dict1[first][0]} width="100%" height="550rem"/>
	  </div><br/>
	  <div>
	  <h2><center>MEET YOUR NEW FRIEND</center></h2>
	  <div style={{paddingLeft:"5%"}}>
	  <h5>ABOUT</h5>
	  <p>{dict1[first][1]}</p>
	  <h5>TEMPERAMENT</h5>
	  <p>{dict1[first][2]}</p>
	  </div>
	  </div>
	  {this.state.showImageCard &&
	  <div><br/>
	  <h6><center>MORE CLOSE MATCHES</center></h6>
	  <center><CardGroup style={{width:"90%"}}>
		  <Card>
			<Card.Img variant="top" src={dict1[second][0]} height="250rem"/>
			<Card.Body>
			  <Card.Title>{second}</Card.Title>
			  <Card.Text>
				<Button variant="outline-primary" onClick={this.imageSecondClick}>Know more</Button>{' '}
			  </Card.Text>
			</Card.Body>
		  </Card>
		  <Card>
			<Card.Img variant="top" src={dict1[third][0]} height="250rem"/>
			<Card.Body>
			  <Card.Title>{third}</Card.Title>
			  <Card.Text>
				<Button variant="outline-primary" onClick={this.imageThirdClick}>Know more</Button>{' '}
			  </Card.Text>
			</Card.Body>
		  </Card>
		  <Card>
			<Card.Img variant="top" src={dict1[fourth][0]} height="250rem"/>
			<Card.Body>
			  <Card.Title>{fourth}</Card.Title>
			  <Card.Text>
				<Button variant="outline-primary" onClick={this.imageFourthClick}>Know more</Button>{' '}
			  </Card.Text>
			</Card.Body>
		  </Card>
	</CardGroup></center>
</div>
}
{!this.state.showImageCard &&
<center><Button variant="outline-primary" onClick={this.resultClick} size="lg">Back to Results</Button></center>
}
		  <br/></div>
		  }
		  else{
			  elem=<div></div>
		  }
    return (
	<div>
		{elem}
	</div>
    );
  }
}

export default Result;