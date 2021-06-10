import React from "react";
import Assets from "../../../Assets";
import mockedData from "../../../../mocked_data";
import AppIcon from "../index";

// Storybook story format
export default {
    // Must be unique and it is what it's showns in the sidepanel of the dashboard
    title: "Common/AppIcon",
    // Add always as it is required by Add-ons
    component: AppIcon,
    args: {
        label: "MENU",
        size: 22
    },
    argTypes: {
        onPress: {
            action: "clicked",
        },
        icon: { control: { type: "select", options: Assets.icons } },
    },
};

const Template = (args) => <AppIcon {...args} />;
  // shared args between 1 or more stories (not all as otherwise should be added above)
const commonStoriesArgs = {
    isClickable: true,
  };
  
  // STORY 1
export const DefaultAppIcon = Template.bind({});
    DefaultAppIcon.args = {
    icon: Assets.icons.menu
  };
DefaultAppIcon.storyName = "Default";
  
// STORY 2
export const ClickableAppIcon = Template.bind({});
    ClickableAppIcon.args = {
        ...commonStoriesArgs,
        icon: Assets.icons.menu,
    };
ClickableAppIcon.storyName = "Clickable";

// STORY 3
export const BackgroundAppIcon = Template.bind({});
    BackgroundAppIcon.args = {
        ...commonStoriesArgs,
        icon: Assets.icons.menu,
        style: { backgroundColor: "rgba(51,51,51,0.3)" }
    };
BackgroundAppIcon.storyName = "With Background";

// STORY 4
export const ImageAppIcon = Template.bind({});
    ImageAppIcon.args = {
        ...commonStoriesArgs,
        size: 40,
        style: {height: 40, width: 40},
        imageSource: mockedData.imageData.url,
    };
ImageAppIcon.storyName = "Background Image";

// STORY 5
export const RadiusImageAppIcon = Template.bind({});
    RadiusImageAppIcon.args = {
        ...commonStoriesArgs,
        imageBorderRadius: 20,
        size: 40,
        style: {height: 40, width: 40},
        imageSource: mockedData.imageData.url,
    };
RadiusImageAppIcon.storyName = "Radius Background Image";
