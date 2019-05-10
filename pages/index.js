import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faCode, faTasks,
  faMoneyBill, faBullhorn, faBalanceScale,
  faPenSquare, faTag, faHome, faPhone,
  faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub, faFacebookF, faCodepen,
  faDocker, faJs, faNodeJs, faHtml5, faCss3,
  faGit } from '@fortawesome/free-brands-svg-icons'
import Logo from '@proux/logo/logo.svg'
import Head from 'next/head'
import '../style.css'
import '../static/fonts/fonts.css'

const techIcon = (icon) => (
  <div className='col-lg-2'>
    <FontAwesomeIcon size='4x' icon={icon} />
  </div>
)

const socialIcons = [
  {
    icon: faTwitter,
    link: 'https://twitter.com/prouxnet',
    label: 'twitter account'
  },
  {
    icon: faGithub,
    link: 'https://github.com/proux',
    label: 'github account'
  },
  {
    icon: faCodepen,
    link: 'https://codepen.io/proux',
    label: 'codepen account'
  },
  {
    icon: faFacebookF,
    link: 'https://www.facebook.com/proux.net',
    label: 'facebook account'
  }
]

const socialIcon = (obj) => (
  <li>
    <a href={obj.link} aria-label={'proux ' + obj.label}>
      <FontAwesomeIcon size='2x' icon={obj.icon} />
    </a>
  </li>
)

export default () => {
  return <div>
    <Head>
      <title>proux</title>
    </Head>
    <header>
      <Logo class='prouxLogo' />
      <p>Web Consulting.</p>
      <p>Web Solutions.</p>
    </header>
    <div id='service'>
      <div className='container'>
        <div className='row'>
          <h2 style={{ marginTop: '70px' }}>UNSERE SERVICES</h2>
          <hr />
          <div className='col-lg-offset-2 col-lg-8'>
            <p style={{ marginBottom: '70px' }}>F&uuml;r Web-Systeme beliebiger Gr&ouml;&szlig;e und Art bieten wir einen ganzheitlichen Ansatz mit unseren Angeboten. Wir stehen Ihnen bei dem Spagat zwischen Zeit, Kosten und Umfang bei der Umsetzung eines Web-Projekts stets zur Seite.</p>
          </div>
        </div>
      </div>
    </div>
    <div class='greywrap'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4'><FontAwesomeIcon icon={faComment} size='4x' />
            <h2>Consulting</h2>
            <p>Wir beraten Sie zu jedem Aspekt eines bestehenden oder zuk&uuml;nftigen Web-Systems in beliebiger Komplexit&auml;t.</p>
          </div>
          <div className='col-lg-4'><FontAwesomeIcon icon={faCode} size='4x' />
            <h2>Development</h2>
            <p>Wir &uuml;bernehmen oder vermitteln die Entwicklung oder Anpassung n&ouml;tiger Software f&uuml;r Ihr Projekt mit h&ouml;chstem Qualit&auml;tsanspruch.</p>
          </div>
          <div className='col-lg-4'><FontAwesomeIcon icon={faTasks} size='4x' />
            <h2>Infrastruktur</h2>
            <p>Die skalierbare und ausfallsichere Infrastruktur und ihr Betrieb bildet das Fundament, ein Web-System erfolgreich zu betreiben.</p>
          </div>
        </div>
      </div>
    </div>
    <section className='section-divider textdivider divider1 indented'>
      <div className='container'>
        <div className='row'>
          <h3>&raquo;SOFTWARE IS LIKE SEX:</h3>
          <h3>IT&apos;S BETTER WHEN IT&apos;S FREE.&laquo;</h3>
          <p><i>Linus Torvalds</i></p>
          <hr />
          <p>Wir glauben an die Open Source Idee und handeln auch nach dieser.</p>
        </div>
      </div>
    </section>
    <div style={{ paddingTop: '40px', textAlign: 'center' }} class='indented'>
      <div className='container'>
        <div className='row white'>
          <h2>AKTUELLE TECHNOLOGIEN</h2>
          <hr />
          {[faNodeJs, faGit, faDocker, faHtml5, faCss3, faJs].map(techIcon).concat()}
          <div className='col-lg-12'>
            <p>Wir setzen aktuell prim&auml;r node.js als Programmiersprache ein, und um Infrastruktur in beliebiger Gr&ouml;&szlig;e zur Verf&uuml;gung stellen zu k&ouml;nnen, arbeiten wir mit einfachen, modernen L&ouml;sungen wie git und Docker. Bei den sichtbaren Ergebnissen unserer Systeme setzen wir auf die modernsten Standards und haben dennoch stets die entsprechenden Zielgruppen im Blick.</p>
          </div>
        </div>
      </div>
    </div>
    <section className='section-divider textdivider divider2'>
      <div className='container'>
        <div className='row'>
          <h3>AUS HAMBURG MIT <FontAwesomeIcon icon={faHeart} /></h3>
          <hr />
          <ul style={{ marginBottom: '25px' }}>
            {socialIcons.map(socialIcon).concat('')}
          </ul>
        </div>
      </div>
    </section>
    <div class='footer' style={{ marginBottom: '75px', paddingTop: '40px' }}>
      <div className='container'>
        <div className='row'>
          <h2>KONTAKT</h2>
          <hr />
          <div className='col-lg-6'>
            <p><FontAwesomeIcon icon={faTag} /> proux<sup>&reg;</sup> ug (haftungsbeschr&auml;nkt)</p>
            <p><FontAwesomeIcon icon={faHome} /> Sievekingsallee 114a | 20535 HH</p>
            <p><FontAwesomeIcon icon={faPhone} /> +49 40 2093 3981</p>
            <p><FontAwesomeIcon icon={faEnvelope} /> <a href='mailto:info@proux.net'>info@proux.net</a></p>
          </div>
          <div className='col-lg-6'>
            <p><FontAwesomeIcon icon={faPenSquare} /> Gesch&auml;ftsf&uuml;hrer: Nico Lindemann</p>
            <p><FontAwesomeIcon icon={faMoneyBill} /> USt.-IdNr.: DE305787148</p>
            <p><FontAwesomeIcon icon={faBullhorn} /> Handesregistereintrag: AG Hamburg HRB 138858</p>
            <p><FontAwesomeIcon icon={faBalanceScale} /> Wortmarke: Nr. 30 2008 036 348</p>
          </div>
        </div>
      </div>
    </div>
    <div class='footerwrap'>
      <div className='container'>
        <div className='row'>
          <h6>&copy; Copyright 2019</h6>
        </div>
      </div>
    </div>
  </div>
}
