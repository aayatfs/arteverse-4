import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import AssignQuiz from "./pages/AssignQuiz";
import RegisterPage from "./pages/RegisterPage";
import SignInPage from "./pages/SignInPage";
import ArtGallery from "./pages/ArtGallery";
import CustomizeAvatar from "./pages/CustomizeAvatar";
import InstructorPage from "./pages/InstructorPage";
import StudentPage from "./pages/StudentPage";
import Quiz from "./pages/Quiz";
import AIGenerator from "./pages/AIGenerator";
import Classroom from "./pages/Classroom";
import WhyUs from "./pages/WhyUs";
import AboutUs from "./pages/AboutUs";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/assign-quiz":
        title = "";
        metaDescription = "";
        break;
      case "/register-page":
        title = "";
        metaDescription = "";
        break;
      case "/sign-in-page":
        title = "";
        metaDescription = "";
        break;
      case "/art-gallery":
        title = "";
        metaDescription = "";
        break;
      case "/customize-avatar":
        title = "";
        metaDescription = "";
        break;
      case "/instructor-page":
        title = "";
        metaDescription = "";
        break;
      case "/student-page":
        title = "";
        metaDescription = "";
        break;
      case "/quiz":
        title = "";
        metaDescription = "";
        break;
      case "/ai-generator":
        title = "";
        metaDescription = "";
        break;
      case "/classroom":
        title = "";
        metaDescription = "";
        break;
      case "/why-us":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/assign-quiz" element={<AssignQuiz />} />
      <Route path="/register-page" element={<RegisterPage />} />
      <Route path="/sign-in-page" element={<SignInPage />} />
      <Route path="/art-gallery" element={<ArtGallery />} />
      <Route path="/customize-avatar" element={<CustomizeAvatar />} />
      <Route path="/instructor-page" element={<InstructorPage />} />
      <Route path="/student-page" element={<StudentPage />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/ai-generator" element={<AIGenerator />} />
      <Route path="/classroom" element={<Classroom />} />
      <Route path="/why-us" element={<WhyUs />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  );
}
export default App;
