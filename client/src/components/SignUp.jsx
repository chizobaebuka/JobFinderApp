import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"
import { useForm } from 'react-hook-form';
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import TextInput from "./TextInput";
import CustomButton from "./CustomButton";
import PropTypes from 'prop-types';

const SignUp = ({ open, setOpen }) => {
    // const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const location = useLocation();

    const [isRegistered, setIsRegistered] = useState(true);
    const [isLogin, setIsLogin] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [accountType, setAccountType] = useState("seeker");

    const [errMsg, setErrMsg] = useState("");
    let from = location?.state?.from?.pathname || '/';

    const { register, handleSubmit, getValues, watch, formState: { errors } } = useForm({
        mode: "onChange",

    })
    const closeModal = () => setOpen(false);
    const onSubmit = () => { };
    return <>
        <Transition
            appear
            show={open || false}
        >
            <Dialog
                as="div"
                className='relative z-10'
                onClose={closeModal}
            >
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div
                        className="fixed inset-0 bg-black bg-opacity-25"
                    />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto ">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel
                                className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'
                            >
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-semibold leading-6 text-gray-900"
                                >
                                    {isRegistered ? "Create Account" : "Account Sign In"}
                                </Dialog.Title>

                                <div className="w-full flex items-center justify-center py-4 ">
                                    <button
                                        className={`flex-1 px-4 py-2 rounded text-sm outline-none ${accountType === 'seeker' ? 'bg-[#1d4fd862] text-blue-900 font-semibold' : 'bg-white border-blue-400'}`}
                                        onClick={() => setAccountType('seeker')}
                                    >
                                        User Account
                                    </button>
                                    <button
                                        className={`flex-1 px-4 py-2 rounded text-sm outline-none ${accountType !== 'seeker' ? 'bg-[#1d4fd862] text-blue-900 font-semibold' : 'bg-white border-blue-400'}`}
                                        onClick={() => setAccountType('company')}
                                    >
                                        Company Account
                                    </button>
                                </div>

                                <form action=""
                                    className="w-full flex flex-col gap-5"
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    <TextInput
                                        name="email"
                                        label="Email Address"
                                        placeholder="email@example.com"
                                        type="text"
                                        register={register('email', {
                                            required: 'Email Address is required',
                                        })}
                                        error={errors.email ? errors.email.message : ''}
                                    />

                                    {isRegistered && (
                                        <div className="w-full flex gap-1 md:gap-2">
                                            <div
                                                className={`${accountType === 'seeker' ? 'w-1/2' : 'w-full'
                                                    }`}
                                            >
                                                <TextInput
                                                    name={
                                                        accountType === 'seeker'
                                                            ? 'firstName' : 'name'
                                                    }
                                                    label={
                                                        accountType === 'seeker'
                                                            ? 'firstName' : 'CompanyName'
                                                    }
                                                    placeholder={
                                                        accountType === 'seeker'
                                                            ? 'eg. James' : 'Company Name'
                                                    }
                                                    type="text"
                                                    register={register(
                                                        accountType === 'seeker' ? 'firstName' : 'Company Name', {
                                                        required: accountType === 'seeker' ? 'First Name is required' : 'Company Name is required',
                                                    }
                                                    )}
                                                    error={errors.firstName ? errors.firstName.message : ''}
                                                />
                                            </div>

                                            {
                                                accountType === 'seeker' && (
                                                    <div className="w-1/2">
                                                        <TextInput
                                                            name="lastName"
                                                            label="Last Name"
                                                            placeholder="eg. Doe"
                                                            type="text"
                                                            register={register('lastName', {
                                                                required: 'Last Name is required',
                                                            })}
                                                            error={errors.lastName ? errors.lastName?.message : ''}
                                                        />
                                                    </div>
                                                )
                                            }


                                        </div>
                                    )
                                    }

                                    <div className="w-full flex gap-1 md:gap-2">
                                        <div
                                            className={`${accountType === 'seeker' ? 'w-1/2' : 'w-full'
                                                }`}
                                        >
                                            <TextInput
                                                name='password'
                                                label='Password'
                                                placeholder="Password"
                                                type="password"
                                                register={register('password', {
                                                    required: 'Password is required!',
                                                })}
                                                error={errors.password ? errors.password?.message : ''}
                                            />
                                        </div>

                                        {
                                            accountType === 'seeker' && (
                                                <div className="w-1/2">
                                                    <TextInput
                                                        name='confirm password'
                                                        label='Confirm Password'
                                                        placeholder="Confirm Password"
                                                        type="confirm password"
                                                        register={register('confirm password', {
                                                            required: 'Confirm Password is required!',
                                                        })}
                                                        error={errors.password ? errors.password?.message : ''}
                                                    />
                                                </div>
                                            )
                                        }


                                    </div>

                                    {errMsg && (
                                        <span
                                            className="text-sm text-red-500 italic mt-0.5"
                                        >
                                            {errMsg}
                                        </span>
                                    )}

                                    <div 
                                        className="mt-2"
                                    >
                                        <CustomButton 
                                            type="Submit"
                                            containerStyles={`inline-flex justify-center rounded-md border bg-blue-600 px-8 py-2 text-sm font-medium text-white outline-none hover:bg-blue-800`}
                                            title={isRegistered ? "Create Account" : "Account Login" }
                                        />
                                    </div>
                                </form>

                                <div className="mt-4">
                                    <p className="text-sm text-gray-700">
                                        {isRegistered ? "Already Has an Account" : "Do not have an account"}
                                        <span 
                                            className="text-sm text-blue-600 nl-2 hover:text-blue-700 font-semibold cursor-pointer"
                                            onClick={() => setIsRegistered((prev) => !prev)}
                                        >{ isRegistered ? "Login" : "Create Account" }</span>
                                    </p>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    </>
}

SignUp.propTypes = {
    open: PropTypes.string.isRequired,
    setOpen: PropTypes.func.isRequired,
};

export default SignUp