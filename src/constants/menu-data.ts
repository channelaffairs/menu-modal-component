import { faBell, faBars, faCheckCircle, faCircle } from "@fortawesome/free-solid-svg-icons";
import { MyBarsComponent, MyCheckComponent } from "../Components";

export const menuData = [
    { icon: faBell, label: "Bell", isNavigatable: false, onPress: () => console.log("Bell is clicked") },
    { icon: faBars, label: "Bars", isNavigatable: true, childComponent: MyBarsComponent, props: {} },
    { icon: faCheckCircle, label: "Check", isNavigatable: true, childComponent: MyCheckComponent, props: {} },
    { icon: faCircle, label: "Circle", isNavigatable: false, onPress: () => console.log("Bell is clicked") },
]