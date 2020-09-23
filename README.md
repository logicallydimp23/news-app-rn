## Author
John Steve Palero

## Install

```jsx
yarn
```

## Link font assets

```
npx react-native link
```

## Running

- #### Packager
  ```
  npx react-native start
  ```

- #### APK
  ```
  npx react-native run-android
  ```

## Notes

  #### iOS
  - Apparently I don't have a MAC so I can't verify the iOS app.

### Packages

  #### axios
  - Used as a request handler.
  - I specifically use version 0.18.1 for me to enable retry as an interceptor.

  #### react-native-fast-image
  - Image component
  - Able to cache images

  #### react-native-vector-icons
  - Icon provider

  #### react-navigation
  - Navigation handler

  #### husky
  - pre-commit hooks

  #### moment
  - date handler

  #### other packages
  - other packages not mentioned above are either devDependencies or dependencies for my own UI components.