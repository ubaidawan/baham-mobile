import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';
import About from './About';

describe('App test', () => {
  beforeAll(() => { /* Runs before all tests */ })
  afterAll(() => { /* Runs after all tests */ })
  beforeEach(() => { /* Runs before each test */ })
  afterEach(() => { /* Runs after each test */ })

  test('That App renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    // Snapshot test ensures that UI stays consistent; must use when resources are shared across components in the app
    expect(tree).toMatchSnapshot();
  });

  test('That About component has more than 1 child', () => {
    const tree = renderer.create(<About />).toJSON();
    expect(tree.children.length).toBeGreaterThan(1);
  });
});
