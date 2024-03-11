import Timeline from "../js/main";
import Article from "../components/article";
import Form from "../components/form";
import "../css/style.css";
import "../css/addContent.css";

function App() {
  return (
    <>
      <header className="cd-main-header text-center flex flex-column flex-center">
        <h1>Responsive Vertical Timeline</h1>
        <div className="add_content">
          <Form />
        </div>
      </header>

      <section className="cd-timeline js-cd-timeline">
        <div className="container max-width-lg cd-timeline__container">
          <div className="cd-timeline__block">
            <div className="cd-timeline__img cd-timeline__img--picture">
              <img src="../img/cd-icon-picture.svg" alt="Picture" />
            </div>

            <div className="cd-timeline__content text-component">
              <h2>Title of section 1</h2>
              <p className="color-contrast-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure
                tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.
              </p>

              <div className="flex justify-between items-center">
                <span className="cd-timeline__date">Jan 14</span>
                <a href="#0" className="btn btn--subtle">
                  Read more
                </a>
              </div>
            </div>
          </div>

          <div className="cd-timeline__block">
            <div className="cd-timeline__img cd-timeline__img--movie">
              <img src="../img/cd-icon-movie.svg" alt="Movie" />
            </div>

            <div className="cd-timeline__content text-component">
              <h2>Title of section 2</h2>
              <p className="color-contrast-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure
                tempora laudantium ipsa ad debitis unde?
              </p>

              <div className="flex justify-between items-center">
                <span className="cd-timeline__date">Jan 18</span>
                <a href="#0" className="btn btn--subtle">
                  Read more
                </a>
              </div>
            </div>
          </div>

          <Article />

          {/* <div className="cd-timeline__block">
            <div className="cd-timeline__img cd-timeline__img--picture">
              <img src="../img/cd-icon-picture.svg" alt="Picture" />
            </div>

            <div className="cd-timeline__content text-component">
              <h2>Title of section 3</h2>
              <p className="color-contrast-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, obcaecati, quisquam id molestias eaque asperiores
                voluptatibus cupiditate error assumenda delectus odit similique earum voluptatem doloremque dolorem ipsam quae rerum quis.
                Odit, itaque, deserunt corporis vero ipsum nisi eius odio natus ullam provident pariatur temporibus quia eos repellat
                consequuntur perferendis enim amet quae quasi repudiandae sed quod veniam dolore possimus rem voluptatum eveniet eligendi
                quis fugiat aliquam sunt similique aut adipisci.
              </p>

              <div className="flex justify-between items-center">
                <span className="cd-timeline__date">Jan 24</span>
                <a href="#0" className="btn btn--subtle">
                  Read more
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </section>
      {/* <script src="/js/main.js"></script> */}
      <Timeline />
    </>
  );
}

export default App;
