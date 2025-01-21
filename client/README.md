# Introduction

This is the web module for the application.

### Stack
1. ReactJS
1. Typescript
1. React-testing-library

### Installing/refreshing dependencies
```
npm install
```

### Starting the client without Docker
```
npm start
```

### Running Tests
```
./scripts/client/run-tests.sh
```

### Building & running the docker image
```
docker build . -t 'client'
docker run -p 3000:3000 'client'
```

### Feature toggles
Feature toggles are created and managed on the server/backend side of the application.
[more info](../server/README.md#feature-toggles)

After creating a feature toggle, it can be used in the client by using the [FeatureToggle](./src/component/FeatureToggle/FeatureToggle.tsx) component, as follows:
```
<FeatureToggle name="NAME_OF_THE_FEATURE">
  <On>
    Content/elements/components to be rendered when the feature is ON
  </On>
  <Off>
    Content/elements/components to be rendered when the feature is OFF
  </Off>
</FeatureToggle>
```
There is an example on how this can be used in the [About](./src/pages/About/About.tsx) component.