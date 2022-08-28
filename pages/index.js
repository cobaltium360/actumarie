import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseMedical, faClock } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'


export default function Home() {



  return (
    <div>
      <Head>
        <title>Actu Santé - Tourista Médocaine</title>
        <meta name="description" content="Page sur la tourista médocaine, maladie des vignerons dans le sud-ouest. Causes, symptômes et remèdes contre cette maladie."/>
        <link rel="icon" href="/icon.jpg" />
      </Head>

      <header>
        <div className='container_logo'>
          <div className='logo_header'>
            <h1><span className='pink'>Actu</span><span className='green'>Santé</span></h1>
          </div>
          <div className='toggle'>
            <FontAwesomeIcon className='icon_header' icon={faHouseMedical} />
          </div>
        </div>
      </header>

      <main>
        <div className='container_titre_article'>
          <h2>Tourista médocaine :</h2>
          <p className='p_titre'>Causes, Symptomes, Comment réagir ? Les choses à savoir !</p>
        </div>
        <div className='container_img'>
          <Image className="photo_marie" src="/photo_marie.webp" alt="personne mal de ventre" width={500} height={500} quality={100}/>
        </div>
        <p className='p_clock'><FontAwesomeIcon className='clock' icon={faClock}/> Temps de lecture : 4min.</p>
        <div className='container_intro'>
          <p>
            La diarrhée est un problème fréquent.
            Elle se caractérise par des selles de consistance liquide ou molle, plus volumineuses et nombreuses qu&apos;à l&apos;habitude (plus de 3 selles par jour). Lorsque celle-ci est déclarée par l’influence de notre environnement, on l’appelle Tourista. 
            <span className='rebecca'> Dans le médoc</span>, zone du sud ouest de la France, située au nord de Bordeaux, ont été recensés ces dernières années de nombreux cas de tourista chez des personnes vivants ou bien simplement de passage dans cette zone. 
            Le docteure <span className='rebecca'>Rébecca CAMOUX</span> et le docteur <span className='rebecca'>Nordine Oumouk</span>, chercheurs à <span className='rebecca'>l’INRAE</span> ce sont donc penchés sur ce qui pourrai être à l’origine de ces problèmes de colique et ont trouvé la cause de cette maladie : <span className='rebecca'>« La tourista médocaine ».</span> 
          </p>
          <p>Dans cet article, vous trouverez toutes les reponses à cette maladie , quelles sont les causes ? les symptomes ? ou encore comment faire si vous y êtes confronté</p>
        </div>
        
        <div className='container_causes'>
          <h2>Quelles sont les causes ? </h2>
          <p>
            Malgré le fait que quelques touristes de passage dans la région aient été touché par la Tourista Médocaine, <span className='rebecca'>cette maladie est souvent contractée par les vignerons ou les personnes travaillant dans la vigne.</span> D’après le <span className='rebecca'>Dr CAMOUX</span>, du fait des fortes chaleurs rencontrés ces dernières années, la vigne aurai tendance à libérer une hormone qui provoquerai des diarrhées chez certaines personnes qui y sont confrontés de façon plus ou moins prolongés. Il arrive qu’on contracte cette maladie après quelques minutes à proximité de la vigne mais plus on est exposé à celle-ci et plus le risque de contracter la maladie est importante. 
          </p>
          <div className='container_img'>
            <Image className="photo_marie" src="/vignes.jpg" alt="personne mal de ventre" width={500} height={500} quality={100}/>
          </div>
          
        </div>

        <div className='container_symptomes'>
          <h2>Les principaux symptômes :</h2>
          <p>
            Comme l’indique son nom, les premiers symptômes sont <span className='rebecca'>des coliques que l’on ne peut contrôller</span>, ce qui est embêtant pour les personnes travaillant dans ce milieu <span className='rebecca'>(certains vignerons témoignent en disant qu’ils ont été contraints de se changer au travail)</span>. On retrouve dans des cas un peu plus poussés les <span className='rebecca'>mêmes symptômes qu’une gastro-entérite</span> ne durant qu’un ou deux jours. Les cas les plus graves peuvent avoir, en plus des diarrhées, des <span className='rebecca'>troubles du goût</span> ainsi que <span className='rebecca'>des pertes irréversibles de cheveux.</span>    
          </p>
        </div>

        <div className='container_reagir'>
          <h2>Comment réagir ? </h2>
          <p>
            Si vous pensez être touché par la tourista médocaine, il n’est pas nécessaire de prendre de médicament généralement utilisé pour ce type de problème (smecta, imodium, …), nous vous conseillons de consulter rapidement votre médecin. Pour les personnes travaillant dans des châteaux, <span className='rebecca'>il est également fortement conseillé de faire part de ceci a vos supérieurs.</span> Même si cela peut être effrayant, ils ne vous jugeront pas et mettront en place des moyens que vous puissiez reprendre votre travail sans risque après votre rétablissement.
          </p>
        </div>



      </main>

      
        
      <Link href="https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40cobaltium360/random-fn-ed228ff7f67049d892bbad28261834b3-signed.apk">Click to download the file</Link>
      <footer>
        <div className='container_titre_footer'>
          <h2 className='h2_footer'><span className='pink'>Actu</span><span className='green'>Santé</span></h2>
        </div>
        <div className='container_social'>
          <FontAwesomeIcon className='icon_footer' icon={faFacebook}/>
          <FontAwesomeIcon className='icon_footer' icon={faYoutube}/>
          <FontAwesomeIcon className='icon_footer' icon={faTwitter}/>
          <FontAwesomeIcon className='icon_footer' icon={faInstagram}/>
        </div>
        <div className='danger_footer'>
          <p className='p_danger'>
            En cas de malaise ou de maladie, consultez d’abord un médecin ou un professionnel de la santé en mesure d’évaluer adéquatement votre état de santé. En utilisant ce site, vous reconnaissez avoir pris connaissance de l’avis de désengagement de responsabilité et vous consentez à ses modalités. Si vous n’y consentez pas, vous n’êtes pas autorisé à utiliser ce site
          </p>
        </div>
        <div className='fin_footer'>
          <div className="container_p_fin"><p className="p_fin">Reproduction et droit d&apos;auteur © 2022 ActuSanté</p></div>
        </div>
      </footer>
    </div>
  )
}