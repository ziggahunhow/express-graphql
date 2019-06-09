import fs from 'fs';
import path from 'path';
import { gql } from 'apollo-server-express';
import { merge } from 'lodash';
import userSchema from './user';
import bookmarkSchema from './bookmark';
import customScalar from './custom';

export default [userSchema, bookmarkSchema, customScalar];
