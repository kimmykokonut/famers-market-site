import farm from './../images/farm.jpg';

function Header() {
    return (
        <>
            <div className="text-center">
                <img src={farm} alt="farm with Mt Hood view" />
                <h1 >Avery's Organics Farm</h1>
                <p>We are a mid-sized farm in Northern Oregon who grows organic produce and sells at local farmer's markets</p>
            </div>
        </>
    )
}

export default Header;