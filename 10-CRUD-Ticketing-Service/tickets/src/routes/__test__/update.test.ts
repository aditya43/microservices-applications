import request from 'supertest';
import { app } from '../../app';
import mongoose from 'mongoose';

it('return a 404 if the provided id does not exist', async () => {});

it('returns a 401 if the user is not authenticated', async () => {});

it('return a 401 if the user does not own the ticket', async () => {});

it('return a 400 if the user provides an invalid title or price', async () => {});

it('updates the ticket provided valid input', async () => {});
