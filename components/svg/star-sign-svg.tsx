import AquariusSvg from "../../public/images/aquarius.svg";
import AriesSvg from "../../public/images/aries.svg";
import CancerSvg from "../../public/images/cancer.svg";
import CapricornSvg from "../../public/images/capricorn.svg";
import GeminiSvg from "../../public/images/gemini.svg";
import LeoSvg from "../../public/images/leo.svg";
import LibraSvg from "../../public/images/libra.svg";
import PiscesSvg from "../../public/images/pisces.svg";
import SagittariusSvg from "../../public/images/sagittarius.svg";
import ScorpioSvg from "../../public/images/scorpio.svg";
import TaurusSvg from "../../public/images/taurus.svg";
import VirgoSvg from "../../public/images/virgo.svg";
import { StarSign } from "../../types/star-sign.types";

const StarSignSvg = ({ starSign }: { starSign: StarSign }) => {
  switch (starSign) {
    case StarSign.AQUARIUS:
      return <AquariusSvg />;
    case StarSign.ARIES:
      return <AriesSvg />;
    case StarSign.CANCER:
      return <CancerSvg />;
    case StarSign.CAPRICORN:
      return <CapricornSvg />;
    case StarSign.GEMINI:
      return <GeminiSvg />;
    case StarSign.LEO:
      return <LeoSvg />;
    case StarSign.LIBRA:
      return <LibraSvg />;
    case StarSign.PISCES:
      return <PiscesSvg />;
    case StarSign.SAGITTARIUS:
      return <SagittariusSvg />;
    case StarSign.SCORPIO:
      return <ScorpioSvg />;
    case StarSign.TAURUS:
      return <TaurusSvg />;
    case StarSign.VIRGO:
      return <VirgoSvg />;
    default:
      return <></>;
  }
};

export default StarSignSvg;
