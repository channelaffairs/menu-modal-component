// /packages/ui/src/buttons/primary.stories.tsx
import React from "react";
import DefaultDecorator from "../../Test/Decorators";
import AppText from "../index";
// Storybook story format
export default {
  // Must be unique and it is what it's showns in the sidepanel of the dashboard
  title: "Common/AppText",
  // Add always as it is required by Add-ons
  component: AppText,
  // Args to be applied at component level should be declared here
  // This object also drives the
  args: {
    color: "",
  },
  // Decorators are used to wrap stories at component level
  // In case you want to do this for only one component add the decorator at story level
  // decorators: [(story) => <DefaultDecorator>{story()}</DefaultDecorator>],
};

// ------------ RECOMMENDED APPROACH ------------

const Template = (args) => <AppText {...args} />;
// shared args between 1 or more stories (not all as otherwise should be added above)
const commonStoriesArgs = {
  children: "Lorem ipsum dolorem",
};
// STORY 1
export const DefaultText = Template.bind({});
DefaultText.args = {
  ...commonStoriesArgs,
  style: {
    fontSize: 16,
  },
};
DefaultText.storyName = "Default AppText";
// STORY 2
export const BigText = Template.bind({});
BigText.args = {
  ...commonStoriesArgs,
  style: {
    fontSize: 24,
  },
};
BigText.storyName = "Big AppText";
// ------------ USE APPROACH BELOW ONLY FOR A SIMPLE COMPONENT (1/2 stories MAX) -----------------------
// UNCOMMENT only the code portion

// This defines the list of the different stories (e.g. test if btn is primary or secondary)
// export const DefaultText = () => (
//   <AppText color={"black"} style={{ fontSize: 16 }}>
//     This is the small one
//   </AppText>
// );
// BE AWARE STORIES.JS ARE BY ALL MEANS A REACT COMPONENT,
//  HENCE YOU MUST CREATE STORIES OF STORIES
// TO MANAGE TESTS WITH MULTIPLE COMPONENTS
// export const BigText = () => (
//   <AppText color={"black"} style={{ fontSize: 24 }}>
//     This is the big one
//   </AppText>
// );
// In case you want to add a more descriptive story name please use
// DefaultText.storyName = "Default AppText";
// Keep in mind storybook already splits names if you use camelCasing
