import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb, BreadcrumbItem, Tabs, Tab } from 'carbon-components-react';
import { Download16 } from '@carbon/icons-react';
const props = {
  tabs: {
    selected: 0,
    role: 'navigation',
  },
  tab: {
    role: 'presentation',
    tabIndex: 0,
  },
};

const LandingPage = () => {
  return (
    <div className="bx--grid bx--grid--full-width landing-page">
      <div className="bx--row landing-page__banner">
        <div className="bx--col-lg-16">
          <Breadcrumb noTrailingSlash>
            <BreadcrumbItem>
              <a href="/">Home</a>
            </BreadcrumbItem>
          </Breadcrumb>
          <h1 className="landing-page__heading">Member Area</h1>
        </div>
      </div>
      <div className="bx--row landing-page__r2">
        <div className="bx--col bx--no-gutter">
          <Tabs {...props.tabs}>
            <Tab {...props.tab} label="Project Overview">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-lg-16">
                    <h3>Project Overview</h3>
                    <p>
                      At Marriott Vacations Worldwide, we strive to create the
                      most expansive, immersive world of vacation and leisure
                      experiences. We develop premium resorts and innovative
                      travel options around the globe. Yet our success comes
                      from the long-lasting relationships we build with our
                      customers and associates to help them live their lives to
                      the fullest.
                    </p>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="Onboarding">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-lg-16">
                    <h3>Onboarding Process</h3>
                    <div>
                      <p>Step 1</p>
                      <a href="/">Mandatory Training</a>
                    </div>
                    <div>
                      <p>Step 2</p>
                      <a href="/">Security Training</a>
                    </div>
                    <div>
                      <p>Step 3</p>
                      <a href="/">Database Training</a>
                    </div>
                    <div>
                      <p>Step 4</p>
                      <a href="/">Project Specific Training</a>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="Important Links">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-lg-16">
                    <h3>Important Links</h3>
                    <p>
                      <a href="/">Project Link</a>
                    </p>
                    <p>
                      <a href="/">KT Recording Links</a>
                    </p>
                    <p>
                      <a href="/">Others Links</a>
                    </p>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="Attatchments">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-lg-16">
                    <h3>Attatchments</h3>
                    <p>
                      Project Specification Document{' '}
                      <Download16
                        aria-label="Download"
                        className="my-custom-class"
                      />
                    </p>
                    <p>
                      AID Document{' '}
                      <Download16
                        aria-label="Download"
                        className="my-custom-class"
                      />
                    </p>
                    <p>
                      Project Details Document{' '}
                      <Download16
                        aria-label="Download"
                        className="my-custom-class"
                      />
                    </p>
                    <p>
                      Other Documents{' '}
                      <Download16
                        aria-label="Download"
                        className="my-custom-class"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="Application Access">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-lg-16">Application Acces</div>
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="Time Clocking">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-lg-16">
                    <h3>Time Clocking</h3>
                    <p>
                      <b>Account ID:</b> W6TSP
                    </p>
                    <p>
                      <b>Work Item:</b> Service Request
                    </p>
                    <p>
                      <b>Activity Code:</b> GB017M
                    </p>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="Personal Area">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-lg-16">
                    <h3>Personal Area</h3>
                    <p>Coming soon</p>
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

LandingPage.propTypes = {
  tabs: PropTypes.object,
  tab: PropTypes.object,
};
export default LandingPage;
