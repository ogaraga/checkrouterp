import { useNavigate } from 'react-router-dom';
import './Description.css';
import NavBar from "./NavBar"
function Description() {
    let Navigate = useNavigate();
    let clickMe = ()=>{
        Navigate('/');
    }
  return (
    <>
    <NavBar/>
    <span>This is a Trailer page. Each movie has a description.</span>
    <span className='backhome'onClick={clickMe}>HomePage</span>
    <div className="trailer">
        <div className="class1">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Tl7rtMiOrvY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <p>Description: White money is deadly and avoidable</p>
        </div>    
        <div className="class2">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Y_qvxT6g5WA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <p>Description: Its always good to mind your business and leave what you see around as they might pose distraction to you</p>
        </div>    
        <div className="class3">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/qgUvIW70Xr4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>            <p>Description: Using our common sense pays a lot</p>
        </div>
        <div className="class4">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/1CrkZcByDEY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <p>Description: When your God lets you alone, the pains multiplies, hence go to equity with clean hands for your God to bless you</p>
        </div>
        <div className="class5">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/5PE99Y3_H3A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>;
            <p>Description: There are challenges but only a tough approach to it matters</p>
        </div>
        <div className="class6">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/gBHde1DVp5c" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>;
            <p>Description: The wrong way that seemeth right, is indeed a double of vices</p>
        </div>
        <div className="class7">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/kdflE4k1_QE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>;
            <p>Description: Until you belong, you really will not become a master there! Quite intriguing!</p>
        </div>
        <div className="class8">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/gp-vbg5wnN8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <p>Description: You cannot beat the prepared and determined/united</p>
        </div>
        <div className="class9">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/jUyuK8boxcw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <p>Description: It takes the one who is born to rule to overtame situations to be a  game ruler</p>
        </div>

    </div>
    </>
  )
}

export default Description