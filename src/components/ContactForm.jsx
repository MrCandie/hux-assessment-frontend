import Input from "./Input";
import Select from "./Select";
import PropTypes from "prop-types";

export default function ContactForm({
  loading,
  formData,
  setFormData,
  handleSubmit,
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full lg:w-[50%] bg-white justify-center mx-auto p-4 flex flex-col gap-4">
      <div className="w-full flex items-center gap-4 flex-col lg:flex-row">
        <Input
          label="First Name"
          placeholder="John"
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
          value={formData.firstName}
        />
        <Input
          label="Last Name"
          placeholder="Doe"
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
          value={formData.lastName}
        />
      </div>
      <Input
        label="Phone Number"
        placeholder="Enter phone number here"
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        value={formData.phone}
      />
      <Input
        required={false}
        label="Email (OPTIONAL)"
        placeholder="example@gmail.com"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        value={formData.email}
      />
      <Input
        required={false}
        label="Birthday (OPTIONAL)"
        type="date"
        onChange={(e) => setFormData({ ...formData, birthday: e.target.value })}
        value={formData.birthday}
      />
      <Select
        required={false}
        label="Relationship (OPTIONAL)"
        placeholder="Select relationship"
        onChange={(e) =>
          setFormData({ ...formData, relationship: e.target.value })
        }
        value={formData.relationship}
        options={[
          "brother",
          "child",
          "father",
          "domestic partner",
          "friend",
          "manager",
          "mother",
          "parent",
          "partner",
          "relative",
          "sister",
          "spouse",
          "others",
        ]}
      />
      <button
        type="submit"
        className="w-full bg-[#ef4f51] p-4 text-white font-medium text-center rounded-md hover:rounded-md hover:opacity-80">
        {loading ? "Loading..." : "Create"}
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
  formData: PropTypes.object,
  setFormData: PropTypes.func,
  loading: PropTypes.bool,
};
