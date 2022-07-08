import React, { useEffect } from "react";
import { getUsers } from "../actions/authActions";
import { useSelector, useDispatch } from "react-redux";

const Read = () => {
    // const [ posts, setPosts ] = useState([]);
    // const users = useSelector((state) => state.users);
    // const { auth } = useSelector(state => state.auth);
    const users = useSelector((state) => state.users?.results);
    console.log(users)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers());
      }, []);

    return (
        <div className="ui relaxed divided list">
            {/* <ul>{auth.map((user) => <li key={user.id}>{user.name}</li>)}</ul> */}
        </div>
    );
};

export default Read;


// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getUser } from "../actions/authActions";
// // import './home.scss';
// export default function Read() {
//   const dispatch = useDispatch();
//   const { auth } = useSelector(state => state.auth);
//   console.log
//   useEffect(() => {
//    dispatch(getUser());
//   },[dispatch]);
// return (
//    <div> {auth && auth.map(user=>
//      <div key={user.id}>{user.name}</div> )}
//    </div>
//   )
// }

// import * as React from 'react';
// import { connect } from 'react-redux';

// import { getUser } from "../actions/authActions";
//  import PropTypes from "prop-types";
// class Read extends React.Component {
//    componentDidMount() {
//        this.props.getUser();
//    };
    
//    render() {
//       const {user} = this.props;
//       console.log(user)
       
//        if (this.props.error) {
//            return <div style={{ color: 'red' }}>ERROR: {this.props.error}</div>
//        }
    
//        return (
//            <table>
//                <thead>
//                    <tr>
//                        <th>Name</th>
//                        <th>Email</th>
//                        <th>Role</th>
//                    </tr>
//                </thead>
//                <tbody>
//                {this.props.user.map(u =>
//                    <tr key={u.id}>
//                        <td>{u.name}</td>
//                        <td>{u.email}</td>
//                        <td>{u.role}</td>
//                    </tr>
//                )}
//                </tbody>
//            </table>
//        );
//    }
// }
// Read.propTypes = {
// 	getUser: PropTypes.func.isRequired,
// 	loading: PropTypes.bool,
//     error: PropTypes.bool,
//     user: PropTypes.bool,
// };
// const mapStateToProps = state => ({
//    user: state.user,
//    loading: state.loading,
//    error: state.error,
   
// });

// const mapDispatchToProps = {
//     getUser
// };

// export default connect(
//    mapStateToProps,
//    mapDispatchToProps
// )(Read);

// import React from "react";
// import { connect } from "react-redux";
// import { getUser } from "../actions/authActions";
// import PropTypes from "prop-types";
// class Read extends React.Component {
//   componentDidMount() {
//     this.props.getUser()
//   }

//   render() {
//     const { user } = this.props;
//     console.log(user)

//     return (
//       <ul>
//         {user.map(user =>
//           <li key={user.id}>{user.name}</li>
//         )}
//       </ul>
//     );
//   }
// }
// Read.propTypes = {
// 	getUser: PropTypes.object.isRequired,
// 	user: PropTypes.bool,
// };
// const mapStateToProps = ({
//     token, errors
//   }) => ({
//     token,
//     errors
//   });
// const mapDispatchToProps = dispatch => ({   
//     getUser: dispatch(getUser())
//   })
// export default connect(mapStateToProps, mapDispatchToProps)(Read);