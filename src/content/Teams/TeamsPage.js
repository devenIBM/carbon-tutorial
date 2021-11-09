import React from 'react';
import PropTypes from 'prop-types';
import Table from './Table';

const headers = [
  {
    key: 'name',
    header: 'Name',
  },
  {
    key: 'createdAt',
    header: 'Added',
  },
  {
    key: 'updatedAt',
    header: 'Updated',
  },
  {
    key: 'email',
    header: 'Email',
  },
  {
    key: 'links',
    header: 'Links',
  },
];

const rows = [
  {
    id: '1',
    name: 'Vijay Kumar',
    createdAt: '1-1-2013',
    updatedAt: '5-9-2021',
    email: 'vikaykumar@testemail.com',
    links: 'Profile Link',
  },
  {
    id: '2',
    name: 'Kanchan Mishra',
    createdAt: '1-1-2014',
    updatedAt: '6-9-2021',
    email: 'kanchan.mishra@testmail.com',
    links: 'Profile Link',
  },
  {
    id: '3',
    name: 'Member 3',
    createdAt: '1-1-2013',
    updatedAt: '5-9-2021',
    email: 'onemore@testemail.com',
    links: 'Profile Link',
  },
];

const TeamsPage = () => {
  return (
    <div className="bx--grid bx--grid--full-width bx--grid--no-gutter repo-page">
      <div className="team-page__r1">
        <Table headers={headers} rows={rows} />
      </div>
    </div>
  );
};
TeamsPage.propTypes = {
  headers: PropTypes.array,
  rows: PropTypes.array,
};

export default TeamsPage;
