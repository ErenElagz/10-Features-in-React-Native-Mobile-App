const Pages = [
    {
        index: 1,
        title: 'QR Scanner',
        navigateTo: 'QR',
        description: "Opens a screen to scan QR codes using the device's camera.",
    },
    {
        index: 2,
        title: 'Take Picture',
        navigateTo: 'Camera',
        description: "Launches the device's camera to take a photo.",
    },
    {
        index: 3,
        title: 'Location Services',
        navigateTo: 'Location',
        description:
            "Accesses the device's GPS and other location services to retrieve the current location.",
    },
    {
        index: 4,
        title: 'AI Based ChatBot',
        navigateTo: 'ChatBot',
        description:
            'Navigates to a screen featuring an AI-powered chatbot for user interaction.',
    },
    {
        index: 5,
        title: 'Localization (Multiple Languages)',
        navigateTo: 'Localization',
        description:
            'Demonstrates how the app can be displayed in different languages based on user preference or device settings.',
    },
    {
        index: 6,
        title: 'Notifications Services',
        navigateTo: 'Notification',
        description:
            'Shows examples of implementing push notifications or local notifications within the app.',
    },
    {
        index: 7,
        title: 'Dark and Light Theme',
        navigateTo: 'Theme',
        description:
            "Allows the user to switch between a dark and a light visual theme for the app's interface.",
    },
    {
        index: 8,
        title: 'Android ShareSheet',
        navigateTo: 'Share',
        description:
            'Demonstrates how to use the native Android share sheet to share content from the app with other applications.',
    },
    {
        index: 9,
        title: 'Biometric Authentication',
        navigateTo: 'Auth',
        description:
            'Implements biometric security features like fingerprint or face recognition for user authentication.',
    },
    {
        index: 10,
        title: 'Local Storage (To-Do App Example)',
        navigateTo: 'ToDo',
        description:
            'Provides a simple to-do app example showcasing how to store and retrieve data locally on the device.',
    },
];

export default Pages;