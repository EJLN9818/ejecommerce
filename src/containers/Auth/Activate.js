import Layout from '../../hocs/Layout';
import { useParams } from 'react-router';
import { useState } from 'react';
import { connect } from 'react-redux';
import { activate } from '../../redux/actions/auth';
import { Navigate } from 'react-router';
import { Rings } from 'react-loader-spinner';


const Activate = ({activate, loading}) => {
    const params = useParams();
    const [activated, setActivated] = useState(false);

    const activate_account = () => {
        const uid = params.uid;
        const token = params.token;
        activate(uid, token);
        setActivated(true);
    }

    if (activated && !loading) {
        return <Navigate to='/' />
    }

    return (
        <Layout>
            <div className="max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3x1 max-auto">
                    {loading ? 
                    <button 
                    className="inline-flex mt-12 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <Rings 
                        ariaLabel="loading-indicator"
                        color="#fff" 
                        height={20} 
                        width={20} 
                        />
                    </button>:
                    <button 
                    onClick={activate_account}
                    className="inline-flex mt-12 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                    Activate account
                    </button>
                    }
                </div>
            </div>
        </Layout>
    )
}

const mapsStateToProps = (state) => ({
    loading: state.Auth.loading
})

export default connect(mapsStateToProps, {
    activate
}) (Activate)