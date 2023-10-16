import Sidebar from "../components/Sidebar";
import React, { useState } from "react";
import { Albums } from "../components/Albums";
import { Header } from "../components/Header";
import { Add } from "../components/functions/Add";
import "../styles/MainPage.css";
import { Detail } from "../components/Detail";

interface MainPageProps {}

type ContentType = 'Albums' | 'AddAlbum' | 'Details';

const MainPage: React.FC<MainPageProps> = () => {
  const [contentToRender, setContentToRender] = useState<JSX.Element>(<Albums />);

  const changeContent = (newContent: ContentType) => {
    let contentComponent: JSX.Element;
    switch (newContent) {
      case 'Albums':
        contentComponent = <Albums />;
        break;
      case 'AddAlbum':
        contentComponent = <Add />;
        break;
        case 'Details':
        contentComponent = <Detail />;
        break;
      default:
        contentComponent = <Albums />;
    }
    setContentToRender(contentComponent);
  };

  return (
    <div className="page-wrapper">
      <Sidebar changeContent={changeContent} />
      <div className="page-content">
        <Header />
        <div className="main-container">
        {contentToRender}
        </div>
      </div>
    </div>
  );
};

export default MainPage;