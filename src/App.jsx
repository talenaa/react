import Header from './Header.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Student from './Student.jsx'
import Footer from './Footer.jsx'

function App(){
  
    return(
      <>
        <Header/>
        <Food/>
        <Card/>
        <Button/>
        <Student name="Patrick" age={16} isStudent={true}/>
        <Footer/>
      </>
    );
}

export default App