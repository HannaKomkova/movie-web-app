import GlobalStyle from '../../styles/index.module.scss'
import Header from '../../components/Header/Header'
import HomePageStyles from './HomePage.module.scss'
import HomePageBackgroundImg from '../../assets/HeroImg.png'
import Button from '../../components/ui/Button/Button'

function Home(){
    return (<>
            <Header/>
            <main>
                <section className={HomePageStyles['hero']}>
                    <div className={HomePageStyles['hero-background-img']}>
                                <img src={HomePageBackgroundImg} alt='Home Page background img'/>
                    </div>       
                    <div className={GlobalStyle['container']}>
                        <div className={HomePageStyles['hero-wrapper']}>    
                            <h1> The Best Streaming Experience </h1>
                            <p>StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
                            <Button/>
                        </div>
                    </div>
                    
                </section>
            </main>
    </>
       
    )
}

export default Home;