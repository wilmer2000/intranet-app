import "./news.scss"
const newsList = [
    {
        id: 1,
        title: "Company All-Hands Meeting",
        description: "In case you missed our most recent All-Hands meeting, you can find the video here."
    },
    {
        id: 2,
        title: "Healthy mind",
        description: "Here are a few things that may help you relax, manage stress and feel more productive."
    },
    {
        id: 3,
        title: "Flown | Focus",
        description: "Flown provides programming to encourage deep work and focus (and fight procrastination). A free account provides access to live focus and recharge sessions on Fridays, 2x on-demand content each month and various other content. Enough to see if this is helpful or to begin introducing new habits into your day."
    },
    {
        id: 4,
        title: "Breathwrk | Breathe",
        description: "Breathwrk is a simple yet way to alleviate stress and anxiety, fall asleep faster and energize yourself. Learn how to breathe properly with guided exercises backed by science and research. The free version will give you access to several exercises. If it works for you, they also offer a Grant Program you can apply to for a Pro subscription."
    },
    {
        id: 5,
        title: "UCLA Mindful | Meditate",
        description: "UCLA, a university based in Los Angeles, provides this app for free to help you practice mindfulness meditation anywhere and anytime with guidance from the UCLA Mindful Awareness Research Center. Scienific research shows minfulness can help manage stress-related physical conditions, reduce anxiety and depression, cultivate positive emotions and help improve your overall health. In English and Spanish!"
    },
    {
        id: 6,
        title: "Calm | Relax",
        description: "World's leading app to manage meditation, sleep and relaxation. The free version provides access to a combination of exercises to help you breathe, meditate and track your mood."
    },
    {
        id: 7,
        title: "Rain Rain | Sleep",
        description: "Though the above apps and exercises should also help, listening to sounds as you go to sleep may clear your head and allow you to fall asleep faster."
    }
]

const NewsList = () => {
    return newsList.map((news) => {
        return (
            <li key={news.id}>
                <div className="news-item news-big-size">
                    <a href="#" className="news-link"></a>
                    <h4>{news.title}</h4>
                    <p>{news.description}</p>
                </div>
            </li>
        )
    })
}

function News() {
    return (
        <div className="news-content">
            <h3 className="card-title">Company Announcements</h3>
            <ul className="news-list">
                { NewsList() }
            </ul>
        </div>
    );
}

export default News;
