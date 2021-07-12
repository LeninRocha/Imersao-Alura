
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

function ProfileSideBar(props){
  
  return(
    <Box > 
        <img src={`https://github.com/${props.githubUser}.png`}/>
    </Box >
  )
}

function PessoasFavorita(props){
  return(
    <ProfileRelationsBoxWrapper>
      <h2 className='smallTitle' >
        Pessoas: {props.pessoasFavorita.length}
      </h2>
        <ul>
        {props.pessoasFavorita.map((pessoasFavorita) => {
          return(
            <li>
            <a href={`/users/${pessoasFavorita}`} key={pessoasFavorita}>
              <img src={`https://github.com/${pessoasFavorita}.png`} />
              <span>{pessoasFavorita}</span>
            </a>
          </li>
          )
        })}
        </ul>
      </ProfileRelationsBoxWrapper>
  )
}
export default function Home() {
  const githubUser = 'LeninRocha'
  const pessoasFavorita = ['juunegreiros', 'omariosouto', 'peas', 'rafaballerini',
  'marcobrunodev']
  return (
    <>
      <AlurakutMenu/>
    <MainGrid>
      <div className='profileArea' style={{gridArea: 'profileArea'}}>
        <ProfileSideBar githubUser={githubUser}/>
      </div>
      <div className='welcomeArea' style={{gridArea: 'welcomeArea'}}>
      <Box >
        <h1 className='title'>
          Bem-Vindo(a) {githubUser}
          <OrkutNostalgicIconSet/>
          
        </h1>
      </Box>
      </div>
      <div className='profileRelationsArea' style={{gridArea: 'profileRelationsArea'}}>
      <PessoasFavorita pessoasFavorita={pessoasFavorita}/>
      <Box>
        Comunidades
      </Box>
      </div>
     
    </MainGrid>
    </>
  ) 
}
