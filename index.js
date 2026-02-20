const names = [
  "Simba", "Dumbo", "Max", "Whiskers", "Spirit", "Buddy", "Charlie", "Bella", "Rocky", "Lucy",
  "Milo", "Luna", "Sadie", "Oscar", "Toby", "Jack", "Chloe", "Zoe", "Maggie", "Rex",
  "Sophie", "Oliver", "Lola", "Ruby", "Misty", "Nala", "Buster", "Tinkerbell", "Leo", "Daisy", "Ziggy"
];

const species = [
  "Panthera leo", "Loxodonta africana", "Canis lupus familiaris", "Felis catus", "Equus ferus caballus",
  "Canis lupus familiaris", "Canis lupus familiaris", "Canis lupus familiaris", "Canis lupus familiaris", "Canis lupus familiaris",
  "Felis catus", "Felis catus", "Canis lupus familiaris", "Felis catus", "Canis lupus familiaris", "Canis lupus familiaris", "Felis catus",
  "Felis catus", "Canis lupus familiaris", "Canis lupus familiaris", "Felis catus", "Felis catus", "Canis lupus familiaris", "Canis lupus familiaris",
  "Canis lupus familiaris", "Felis catus", "Panthera tigris", "Canis lupus familiaris", "Canis lupus familiaris", "Felis catus"
];

const owners = [
  "John Doe", "Jane Smith", "Emily Brown", "Sarah Johnson", "Tom Clark", "Mike Davis", "Lisa White", "David Green", "Nina Adams", "Sophia Lee",
  "Lucas Martin", "Ella Roberts", "James Taylor", "Jack Anderson", "Megan Walker", "Chris Harris", "Nora Scott", "Owen Thompson", "Eve Allen", "Aaron King",
  "Emma Young", "Isaac Wright", "Mia Walker", "Jack Carter", "Anna Perez", "Grace Miller", "Matthew Moore", "Ella Bell", "Liam King", "Oliver Mitchell"
];

const birthDates = [
  "2015-05-12", "2008-07-21", "2020-03-15", "2017-11-09", "2012-02-28", "2019-06-05", "2014-09-14", "2013-12-17", "2016-02-20", "2021-01-30",
  "2018-08-22", "2016-04-13", "2017-11-01", "2018-05-26", "2020-10-19", "2021-03-17", "2019-12-15", "2020-05-04", "2020-11-10", "2022-01-18",
  "2016-03-10", "2014-07-08", "2020-09-03", "2017-03-25", "2015-11-04", "2016-09-30", "2017-02-11", "2020-07-07", "2019-05-14", "2015-01-25"
];

const deathLocations = [
  "Serengeti National Park, Tanzania", "Kruger National Park, South Africa", "Los Angeles, California", "New York, USA", "Wyoming, USA", "Chicago, Illinois",
  "London, UK", "Paris, France", "Miami, Florida", "Berlin, Germany", "Toronto, Canada", "Dallas, Texas", "Rome, Italy", "Sydney, Australia", "Cape Town, South Africa",
  "San Francisco, California", "Las Vegas, Nevada", "Houston, Texas", "Denver, Colorado", "Vancouver, Canada", "Boston, Massachusetts", "Seattle, Washington",
  "Copenhagen, Denmark", "New Orleans, Louisiana", "Sydney, Australia", "Madrid, Spain", "Toronto, Canada", "Rome, Italy", "Berlin, Germany", "Dubai, UAE", "Tokyo, Japan"
];

const img = [

    "https://www.livehome3d.com/assets/img/social/how-to-design-a-house.jpg","https://img.freepik.com/free-vector/beautiful-home_24877-50819.jpg?semt=ais_user_personalization&w=740&q=80", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqnbTn0gKzmhEu5uAr05c8uf7zsbKWrsShdg&s",

    "https://www.livehome3d.com/assets/img/social/how-to-design-a-house.jpg","https://img.freepik.com/free-vector/beautiful-home_24877-50819.jpg?semt=ais_user_personalization&w=740&q=80", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqnbTn0gKzmhEu5uAr05c8uf7zsbKWrsShdg&s",

    "https://www.livehome3d.com/assets/img/social/how-to-design-a-house.jpg","https://img.freepik.com/free-vector/beautiful-home_24877-50819.jpg?semt=ais_user_personalization&w=740&q=80", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqnbTn0gKzmhEu5uAr05c8uf7zsbKWrsShdg&s",

    "https://www.livehome3d.com/assets/img/social/how-to-design-a-house.jpg","https://img.freepik.com/free-vector/beautiful-home_24877-50819.jpg?semt=ais_user_personalization&w=740&q=80", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqnbTn0gKzmhEu5uAr05c8uf7zsbKWrsShdg&s",

    "https://www.livehome3d.com/assets/img/social/how-to-design-a-house.jpg","https://img.freepik.com/free-vector/beautiful-home_24877-50819.jpg?semt=ais_user_personalization&w=740&q=80", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqnbTn0gKzmhEu5uAr05c8uf7zsbKWrsShdg&s",

    "https://www.livehome3d.com/assets/img/social/how-to-design-a-house.jpg","https://img.freepik.com/free-vector/beautiful-home_24877-50819.jpg?semt=ais_user_personalization&w=740&q=80", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqnbTn0gKzmhEu5uAr05c8uf7zsbKWrsShdg&s",

    "https://www.livehome3d.com/assets/img/social/how-to-design-a-house.jpg","https://img.freepik.com/free-vector/beautiful-home_24877-50819.jpg?semt=ais_user_personalization&w=740&q=80", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqnbTn0gKzmhEu5uAr05c8uf7zsbKWrsShdg&s",

    "https://www.livehome3d.com/assets/img/social/how-to-design-a-house.jpg","https://img.freepik.com/free-vector/beautiful-home_24877-50819.jpg?semt=ais_user_personalization&w=740&q=80", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqnbTn0gKzmhEu5uAr05c8uf7zsbKWrsShdg&s",

    "https://www.livehome3d.com/assets/img/social/how-to-design-a-house.jpg","https://img.freepik.com/free-vector/beautiful-home_24877-50819.jpg?semt=ais_user_personalization&w=740&q=80", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqnbTn0gKzmhEu5uAr05c8uf7zsbKWrsShdg&s",
    "https://www.livehome3d.com/assets/img/social/how-to-design-a-house.jpg","https://img.freepik.com/free-vector/beautiful-home_24877-50819.jpg?semt=ais_user_personalization&w=740&q=80", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqnbTn0gKzmhEu5uAr05c8uf7zsbKWrsShdg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwWwXAYV5_L7cZAmCTZsH1G9xqY0VMnUvQQg&s"


]


let cards = document.getElementById("cards")

let content = " ";



for (let i = 0; i < names.length; i++) {

    cards.innerHTML +=`

    	<article class="flex flex-col dark:bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" class="object-cover w-full h-52 dark:bg-gray-500" src="${img[i]}">
				</a>
				<div class="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">${names[i]}</a>
					<a rel="noopener noreferrer" href="#" class="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">${owners[i]}</a>
					<h3 class="flex-1 py-2 text-lg font-semibold leading-snug">${species[i]}</h3>
					<div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
						<span>${birthDates[i]}</span>
						<span>${deathLocations[i]}</span>
					</div>
				</div>
			</article>
    
    
    `

    

    

    
}


content.innerHTML = cards




