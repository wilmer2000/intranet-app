// Components imports
import Slide from "../../../components/slide/slide.tsx";
import AppList from "../../../components/app-list/app-list.tsx";
import News from "../../../components/news/news.tsx";

function HomePage() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <Slide/>
                </div>
            </div>

            <div className="row">
                <div className="col-8">
                    <AppList/>
                    <News/>
                </div>
                <div className="col-4">
                    Aside content
                </div>
            </div>
        </div>
    );
}

export default HomePage;
