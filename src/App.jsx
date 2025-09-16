import { useState } from "react";
import Accordian from "./components/accordion/Accordian";
import RandomColor from "./components/randomColour/RandomColor";
import StarRating from "./components/star-rating/StarRating";
import LoadMore from "./components/load-more/LoadMore";
import TreeView from "./components/tree-view/TreeView";
import QRCodeGenerator from "./components/qrCodeGenerator/QRCodeGenerator";
import GithubFinder from "./components/githubFinder/GithubFinder";
import ScrollIndicator from "./components/scroll-indicator/ScrollIndicator";
import Accordion2 from "./components/accordion2/Accordion2";
import ModalPopUp from "./components/custom-modal-pop-up/ModalPopUp";
import TabTest from "./components/custom-tabs/TabTest";
import LightDarkMode from "./components/light-dark-mode/LightDarkMode";
import LoadMore2 from "./components/load-more-data2/LoadMore2";
import GithubFinder2 from "./components/github-profile-finder2/GithubFinder2";
import RandomColor2 from "./components/random-color2/RandomColor2";
import SearchAutoComplete from "./components/search-auto-complete/SearchAutoComplete";
import StarRating2 from "./components/star-rating2/StarRating2";
import TreeView2 from "./components/treeView2/TreeView2";
import menu from "./components/treeView2/TreeViewData";
import menus from "./components/TreeView3/menus3";
import ImageSlider from "./components/image-slider/ImageSlider";
import Accordion3 from "./components/accordion3/Accordion3";
import ModalPop from "./components/modalPopUp2/ModalPop";
import Tabs3 from "./components/custom-tabs3/Tabs3";
import Tabs3Test from "./components/custom-tabs3/Tabs3Test";
import GitFinder3 from "./components/gitub-finder3/GitFinder3";
import ImageSlider3 from "./components/image-slider3/ImageSlider3";
import ImageSlider4 from "./components/Image-slider4/ImageSlider4";
import ImageSlider5 from "./components/image-slider5/ImageSlider5";
import TreeView3 from "./components/TreeView3/TreeView3";
import TreeView4 from "./components/tree-view4/TreeView4";
import menuss from "./components/tree-view4/menuss";
import LoadMore3 from "./components/loadMore3/LoadMore3";
import LOadMore4 from "./components/loadMore4/LOadMore4";
import ScrollIndicator2 from "./components/scrollIndicator2/ScrollIndicator2";
import LoadMore5 from "./components/loadmore5/LoadMore5";
import Accordion4 from "./components/accordion4/Accordion4";
import Accordion5 from "./components/Accordion5/Accordion5";
import SearchAuto3 from "./components/SearchAutoComplete3/SearchAuto3";
import RandomColour3 from "./components/randomColour3/RandomColour3";
import StarRating3 from "./components/star-rating3/StarRating3";
import LightDarkmode2 from "./components/lightDarkMode2/LightDarkmode2";
import GithubFinder4 from "./components/githubFinder4/GithubFinder4";
import ModalPopUp3 from "./components/MOdalPopUp3/ModalPopUp3";
import QRCodeGenerator2 from "./components/QRCodeGenerator2/QRCodeGenerator2";
import CustomTabs4 from "./components/CustomTabs4/CustomTabs4";
import ProgressBar from "./components/progress-bar/ProgressBar";
import PaginationTest from "./components/Pagination/PaginationTest";
import DragAndDrop from "./components/DragAndDrop/DragAndDrop";
import RandomQuotesGenerator from "./components/RandomQuotes/RandomQuotesGenerator";
import ToolTip from "./components/ToolTip/ToolTip";
import TipCalculator from "./components/TipCalculator/TipCalculator";
import CurrencyConvertor from "./components/currencyConvertor/CurrencyConvertor";
import FilterProducts from "./components/Filter-products/FilterProducts";
import StepProgressBar from "./components/step-progress-bar/StepProgressBar";
import BmiCalculator from "./components/Bmi-calculator/BmiCalculator";
import DigitalClock from "./components/DigitalClock/DigitalClock";
import StopWatch from "./components/StopWatch/StopWatch";
import SortData from "./components/SortData/SortData";
import PdfViewer from "./components/Pdf-Viewer/PdfViewer";
import UploadFile from "./components/UploadImage/UploadFile";
import QuizApp from "./components/Quizapp/QuizApp";
import NestedComments from "./components/Nested-comments/NestedComments";
import FormValidation from "./components/Form-Validation/FormValidation";
import DebounceApi from "./components/Debounce-Api/DebounceApi";
import MovieApp from "./components/movie-app/MovieApp";
import GlobalState from "./components/movie-app/context/GlobalState";
import CartState from "./components/shopping-cart/CartState";
import CartProvider from "./components/shopping-cart/CartProvider";
import TodoReducer from "./components/TodoReducer/TodoReducer";
import Cart2 from "./components/Cart2/Cart2";
import Cart2context from "./components/Cart2/Cart2context";
import PaginationReducer from "./components/PaginationReducer/PaginationReducer";
import TwentyNine from "./components/CorouselReducer/CarouselReducer";
import CarouselReducer from "./components/CorouselReducer/CarouselReducer";
import Thirteen from "./components/LoginRegistration/LoginRegistration";
import LoginRegistration from "./components/LoginRegistration/LoginRegistration";

function App() {
  return (
    <>
      {/* <Accordian/> */}
      {/* <RandomColor/> */}
      {/* <StarRating /> */}
      {/* <LoadMore /> */}
      {/* <TreeView menus={menus}/> */}
      {/* <QRCodeGenerator></QRCodeGenerator> */}
      {/* <GithubFinder></GithubFinder> */}
      {/* <ScrollIndicator/> */}
      {/* <Accordion2/> */}
      {/* <ModalPopUp></ModalPopUp> */}
      {/* <TabTest></TabTest> */}
      {/* <LightDarkMode></LightDarkMode> */}
      {/* <LoadMore2></LoadMore2> */}
      {/* <GithubFinder2></GithubFinder2> */}
      {/* <RandomColor2/> */}
      {/* <SearchAutoComplete/> */}
      {/* <StarRating2/> */}
      {/* <TreeView2 menus={menu}/> */}
      {/* <ImageSlider   url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}/> */}
      {/* <Accordion3/> */}
      {/* <ModalPop/> */}
      {/* <Tabs3Test/> */}
      {/* <GitFinder3/> */}
      {/* <ImageSlider3/> */}
      {/* <ImageSlider4/> */}
      {/* <ImageSlider5/> */}
      {/* <TreeView3 menus={menus}/> */}
      {/* <TreeView4 menuss={menuss}/> */}
      {/* <LoadMore3/> */}
      {/* <LOadMore4/> */}
      {/* <ScrollIndicator2/> */}
      <LoadMore5/>
      {/* <Accordion4/> */}
      {/* <Accordion5/> */}
      {/* <SearchAutoComplete2/> */}
      {/* <SearchAuto3/> */}
      {/* <RandomColour3/> */}
      {/* <StarRating3/> */}
      {/* <LightDarkmode2/> */}
      {/* <GithubFinder4/> */}
      {/* <ModalPopUp3/> */}
      {/* <QRCodeGenerator2/> */}
      {/* <CustomTabs4/> */}
      {/* <ProgressBar/> */}
      {/* <PaginationTest/> */}
      {/* <DragAndDrop/> */}
      {/* <RandomQuotesGenerator/> */}
      {/* <ToolTip/> */}
      {/* <TipCalculator/> */}
      {/* <CurrencyConvertor/> */}
      {/* <FilterProducts/> */}
      {/* <StepProgressBar/> */}
      {/* <BmiCalculator/> */}
      {/* <DigitalClock/> */}
      {/* <StopWatch/> */}
      {/* <SortData/> */}
      {/* <PdfViewer/> */}
      {/* <UploadFile/> */}
      {/* <QuizApp/>         */}
      {/* <NestedComments/> */}
      {/* <FormValidation/> */}
      {/* <DebounceApi/> */}
      {/* <GlobalState> <MovieApp/></GlobalState> */}
      {/* <CartProvider><CartState/></CartProvider> */}
      {/* <TodoReducer/> */}
      {/* <Cart2context><Cart2/></Cart2context> */}
      {/* <PaginationReducer/> */}
      {/* <CarouselReducer/>         */}
      {/* <LoginRegistration/> */}
    </>
  );
}

export default App;
