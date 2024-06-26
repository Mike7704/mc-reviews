"use client";

export default function GlobalError({ error, reset }) {
  return (
    <div className="content-container top-padding">
      <h2 className="subheading">Something went wrong!</h2>
      <p className="text-backdrop">{error.message}</p>
      <button className="button" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
