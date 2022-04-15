import CorseCard from "./components/CourseCard";
import "./assets/styles/main.css";


const imgDir = 'assets/images/'

const resources = [
  {
    image: imgDir + 'course-card-1.jpg',
    title: "Hospitality"
  },
  {
    image: imgDir + 'course-card-2.jpg',
    title: "Javascript"
  },
  {
    image: imgDir + 'course-card-3.jpg',
    title: "Spider Man"
  },
  {
    image: imgDir + 'course-card-4.jpg',
    title: "Spider Man"
  },
  {
    image: imgDir + 'course-card-5.jpg',
    title: "Spider Man"
  },
  {
    image: imgDir + 'course-card-6.jpg',
    title: "Spider Man"
  },
  {
    image: imgDir + 'course-card-7.jpg',
    title: "Spider Man"
  },
  {
    image: imgDir + 'course-card-8.jpg',
    title: "Spider Man"
  },
  {
    image: imgDir + 'course-card-9.jpg',
    title: "Spider Man"
  },
]


function App() {
  
  const res = resources.map( function(item ){
      return <CorseCard image={item.image} title={item.title} />
  })

  return (
    <div className="App">
      <main>
        <section className="courses">
          <div className="courses__container">
                <h1>Courses</h1>
            <div className="courses__card-container">
              <div className="courses__inner-container">
                { res }
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
