import FirstQuarter from "./FirstQuarter";
import FourthQuarter from "./FourthQuarter";
import SecondQuartar from "./SecondQuartar";
import ThirdQuarter from "./ThirdQuarter";

const Header = () => {

    return (
        //? Header I Divided To Four Quarter are : FirstQuarter , SecondQuarter , ThirdQuarter , FourthQuarter.
        <header>
            <FirstQuarter />
            <SecondQuartar />
            <ThirdQuarter />
            <FourthQuarter />
        </header>
    );
}

export default Header;
