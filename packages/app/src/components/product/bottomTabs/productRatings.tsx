import React from "react";
import ReactStars from "react-rating-stars-component";
import {
  Button,
  Progress,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Textarea,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import { Formik } from "formik";

const RatingLvl = ({ lvl = 5, numOfReviews = 4 }) => {
  return (
    <div className="flex items-center w-full">
      <span className="mr-12">
        {" "}
        <ReactStars
          count={5}
          value={lvl}
          // onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
          edit={false}
        />
      </span>
      <span className="mr-5">
        {" "}
        <Progress width="180px" colorScheme="yellow" size="sm" value={20} isAnimated={true} />
      </span>
      <StatHelpText>{numOfReviews}</StatHelpText>
    </div>
  );
};

const RatingRow = ({ lvl = 5 }) => {
  return (
    <div className="flex items-start flex-col my-5">
      {" "}
      <ReactStars
        count={5}
        value={lvl}
        // onChange={ratingChanged}
        size={24}
        activeColor="#ffd700"
        edit={false}
      />
      <p className="text-left">
        Fusce vitae nibh mi. Integer posuere, libero et ullamcorper facilisis, enim eros tincidunt orci, eget vestibulum
        sapien nisi ut leo. Cras finibus vel est ut mollis. Donec luctus condimentum ante et euismod.
      </p>
      <div className="flex items-center ">
        <p className="text-sm font-semibold ">Peter Wargner </p> -
        <span className="text-xs font-light text-gray-500">April 5, 2016</span>
      </div>
    </div>
  );
};

export const ProductRatings = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between">
        {" "}
        <div className="flex flex-col">
          {" "}
          <div className="flex w-6/12">
            <Stat>
              <StatLabel>Based on 0 ratings</StatLabel>
              <StatNumber>3.7</StatNumber>
              <StatHelpText>overall</StatHelpText>
            </Stat>
          </div>
          <RatingLvl />
          <RatingLvl lvl={4} />
          <RatingLvl lvl={3} numOfReviews={333} />
          <RatingLvl lvl={2} numOfReviews={2} />
          <RatingLvl lvl={1} numOfReviews={2} />
        </div>{" "}
        <div className="w-6/12">
          <p>Add a rating</p>
          <Formik
            initialValues={{ name: "jared" }}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
              }, 1000);
            }}
          >
            {props => (
              <form onSubmit={props.handleSubmit}>
                <div className="flex items-center justify-between my-5">
                  <p className="mr-5">Your rating</p>
                  <span className="w-8/12">
                    {" "}
                    <ReactStars
                      count={5}
                      // value={lvl}
                      // onChange={ratingChanged}
                      size={24}
                      activeColor="#ffd700"
                    />
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="mr-5">Your review</p>
                  <Textarea
                    className="w-8/12"
                    // value={value}
                    // onChange={handleInputChange}
                    placeholder="Here is a sample placeholder"
                    size="sm"
                  />
                </div>

                <Button
                  className="mt-7 px-7 text-xs text-white bg-yellow-brand hover:bg-black"
                  // px={4}
                  size="lg"
                  borderRadius="3xl"
                  type="submit"
                >
                  Add Review
                </Button>
              </form>
            )}
          </Formik>
        </div>
      </div>
      <div className="w-full flex flex-col mt-14">
        {" "}
        <RatingRow />
        <RatingRow />
        <RatingRow />
        <RatingRow />
        <RatingRow />
      </div>
    </div>
  );
};
