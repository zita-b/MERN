import Job from '../models/Job.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';

const createJob = async (req, res) => {
  const { position, company } = req.body;

  if (!position || !company) {
    throw new BadRequestError('Please Provide All Values');
  }

  req.body.createdBy = req.user.userId;

  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
}
const getAllJobs = async (req, res) => {
  res.send('get all jobs')
}
const updateJob = async (req, res) => {
  res.send('update job')
}
const deleteJob = async (req, res) => {
  res.send('delete job')
}
const showStats = async (req, res) => {
  res.send('show stats')
}

export { createJob, updateJob, deleteJob, getAllJobs, showStats}
