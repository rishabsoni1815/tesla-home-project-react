import './App.css';
import Header from "./components/Header.js";
import Accessories from "./assets/Desktop-Accessories.jpg";
import Model3 from "./assets/Desktop-Model3.jpeg";
import ModelS from "./assets/Desktop-ModelS.jpeg";
import ModelX from "./assets/Desktop-ModelX.jpeg";
import ModelY from "./assets/Desktop-ModelY.jpeg";
import SolarPanels from "./assets/Desktop-SolarPanels.jpeg";
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg";
import Item from "./components/item.js"
function App() {
  return (
    <div className="App">
     <Header />
     <div className="app-item-container">
           <Item
              title='Model S'
              desc='Money-back guarantee'
              descLink=''
              backgroundImg={ModelS}
              leftBtnTxt='CUSTOM ORDER'
              leftBtnLink=''
              rightBtnTxt='LEARN MORE'
              rightBtnLink=''
              twoButtons='true'
              first
                />
            <Item
              title='Model 3'
              desc='Money-back guarantee'
              descLink=''
              backgroundImg={Model3}
              leftBtnTxt='CUSTOM ORDER'
              leftBtnLink=''
              rightBtnTxt='LEARN MORE'
              rightBtnLink=''
              twoButtons='true'
                />
             <Item
              title='Model X'
              desc='Money-back guarantee'
              descLink=''
              backgroundImg={ModelX}
              leftBtnTxt='CUSTOM ORDER'
              leftBtnLink=''
              rightBtnTxt='LEARN MORE'
              rightBtnLink=''
              twoButtons='true'
                />
             <Item
                title='Model Y'
                desc='Money-back guarantee'
                descLink=''
                backgroundImg={ModelY}
                leftBtnTxt='CUSTOM ORDER'
                leftBtnLink=''
                rightBtnTxt='LEARN MORE'
                rightBtnLink=''
                twoButtons='true'
                />
          <Item
              title='Lowest Cost Solar Panels in America'
              desc='Money-back guarantee'
              descLink=''
              backgroundImg={SolarPanels}
              leftBtnTxt='ORDER NOW'
              leftBtnLink=''
              rightBtnTxt='LEARN MORE'
              rightBtnLink=''
              twoButtons='true'
                />
          <Item
              title='Solar for new Roof'
              desc='Solar Roof Costs Less Than a New Roof Plus Solar Panels'
              descLink=''
              backgroundImg={SolarRoof}
              leftBtnTxt='ORDER NOW'
              leftBtnLink=''
              rightBtnTxt='LEARN MORE'
              rightBtnLink=''
              twoButtons='true'
                />
             <Item
                title='Accessories'
                desc=''
                descLink=''
                backgroundImg={Accessories}
                leftBtnTxt='SHOP NOW'
                leftBtnLink=''
                rightBtnTxt='LEARN MORE'
                rightBtnLink=''
                />
     </div>
    </div>
  );
}

export default App;
