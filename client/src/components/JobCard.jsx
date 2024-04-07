import PropTypes from 'prop-types';
import { GoLocation } from 'react-icons/go';
import moment from 'moment';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
    // if (!job || !job.company) {
    //     return null; // Handle case when job or job.company is undefined
    // }

    return (
        <Link to={`/job-details/${job?.id}`}>
            <div className='w-full md:w-[16rem] 2xl:w-[18rem] h-[16rem] md:h-[18rem] bg-white flex flex-col justify-between shadow-lg 
                rounded-md px-3 py-5'>
                <div className='flex gap-3'>
                    <img src={job?.company?.profileUrl} alt={job?.company?.name} className='w-14 h-14' />

                    <div className=''>
                        <p className='text-lg font-semibold truncate'>{job?.jobTitle}</p>
                        <span className='flex gap-2 items-center '>
                            <GoLocation className='text-slate-900 text-sm' aria-hidden='true' />
                            {job?.location}
                        </span>
                    </div>
                </div>

                <div className='py-3'>
                    <p className='text-sm'>{job?.detail[0]?.desc.slice(0, 150) + "..." }</p>
                </div>

                <div className='flex items-center justify-between'>
                    <p className='bg-[#1d4fd826] text-[#1d4fd8] py-0..5 px-1.5 rounded font-semibold text-sm '>{job?.jobType}</p>
                    <span className='text-gray-500 text-sm'>
                        {moment(job?.createdAt).fromNow()}
                    </span>
                </div>

            </div>
        </Link>
    );
};

// PropTypes validation
JobCard.propTypes = {
    job: PropTypes.shape({
        id: PropTypes.string.isRequired,
        company: PropTypes.shape({
            profileUrl: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            contact: PropTypes.string.isRequired,
            about: PropTypes.string.isRequired,
        }).isRequired,
        jobTitle: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        jobType: PropTypes.string.isRequired,
        salary: PropTypes.string.isRequired,
        detail: PropTypes.arrayOf(
            PropTypes.shape({
                desc: PropTypes.string.isRequired,
                requirement: PropTypes.string.isRequired,
            })
        ).isRequired,
        applicants: PropTypes.arrayOf(PropTypes.string).isRequired,
        vacancies: PropTypes.number.isRequired,
        createdAt: PropTypes.instanceOf(Date).isRequired,
    }).isRequired,
};


export default JobCard;
