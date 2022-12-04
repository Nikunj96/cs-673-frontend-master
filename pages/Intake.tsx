import Header from '@/components/Header'
import { Layout } from '@/components/Layout'
import { NextHead } from '@/components/NextHead'
import { Button, Checkbox, Label, Textarea, TextInput } from 'flowbite-react'

const Contact = () => {
  return (
    <Layout>
      <div className="flex min-h-screen flex-col items-center">
        <NextHead
          title="Patient Intake Form"
          metaName="Patient Form"
          metaContent="All the required fields are marked with *"
        />

        <Header
          title="Patient Intake Form"
          description="All the required fields are marked with *"
        />

        <main className="w-full justify-center flex">
          <form className="w-full md:w-3/5 px-2 mt-6 flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="First Name" />
              </div>
              <TextInput
                id=" First Name"
                type="name"
				placeholder="Enter your First Name"
                required={true}
              />
            </div>
			
			<div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Middle Initial" />
              </div>
              <TextInput
                id=" Middle Intital"
                type="name"
				placeholder="Enter your Middle Initial"
                required={true}
              />
            </div>
			
			<div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Last Name" />
              </div>
              <TextInput
                id=" Last Name"
                type="name"
				placeholder="Enter your Last Name"
                required={true}
              />
            </div>	
			
			<div>
              <div className="mb-2 block">
                <Label htmlFor="Phone" value="Phone Number" />
              </div>
              <TextInput
                id=" Phone"
                type="phone"
				placeholder="Enter your Phone Number"
                required={true}
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Email ID" />
              </div>
              <TextInput
                id="email"
                type="email"
                placeholder="Enter your email address"
                required={true}
                addon="@"
              />
            </div>
			
			<div>
              <div className="mb-2 block">
                <Label htmlFor="Sex" Gender" />
              </div>
              <TextInput
                id=" sex"
                type="sex"
                required={true}
              />
            </div>
			
			<div>
              <div className="mb-2 block">
                <Label htmlFor="SSN" Social Security Number" />
              </div>
              <TextInput
                id=" ssn"
                type="ssn"
				placeholder="Enter your Social Security	Number"
                required={true}
              />
            </div>
			
			<div>
              <div className="mb-2 block">
                <Label htmlFor="dateOfBirth" Date of Birth" />
              </div>
              <TextInput
                id=" sex"
                type="sex"
				placeholder="Enter your Date of Birth"
                required={true}
              />
            </div>
			
			<div>
              <div className="mb-2 block">
                <Label htmlFor="street" Street" />
              </div>
              <TextInput
                id=" street"
                type="street"
				placeholder="Enter your Street"
                required={true}
              />
            </div>
			
			<div>
              <div className="mb-2 block">
                <Label htmlFor="city" City" />
              </div>
              <TextInput
                id=" city"
                type="city"
				placeholder="Enter your City"
                required={true}
              />
            </div>
			
			<div>
              <div className="mb-2 block">
                <Label htmlFor="state" State" />
              </div>
              <TextInput
                id=" state"
                type="state"
				placeholder="Enter your State"
                required={true}
              />
            </div>
			
			<div>
              <div className="mb-2 block">
                <Label htmlFor="zip" Zipcode" />
              </div>
              <TextInput
                id=" zip"
                type="zip"
				placeholder="Enter your Zipcode"
                required={true}
              />
            </div>
			
			<div>
              <div className="mb-2 block">
                <Label htmlFor="insuranceCompany" Insurance Company" />
              </div>
              <TextInput
                id=" insuranceCompany"
                type="insuranceCompany"
				placeholder="Enter your Insurance Company"
              />
            </div>
			
			<div>
              <div className="mb-2 block">
                <Label htmlFor="plan" Insurance Plan" />
              </div>
              <TextInput
                id=" plan"
                type="plan"
				placeholder="Enter your Insurance Plan"
              />
            </div>
			
			<div>
              <div className="mb-2 block">
                <Label htmlFor="groupNumber" Insurance Group Number" />
              </div>
              <TextInput
                id=" groupNumber"
                type="groupNumber"
				placeholder="Enter your Insurance Group Number"
              />
            </div>
			
			<div>
              <div className="mb-2 block">
                <Label htmlFor="cardHolder" Card Holder Name" />
              </div>
              <TextInput
                id=" cardHolder"
                type="cardHolder"
				placeholder="Enter the Name of the Card Holder"
              />
            </div>
			
			<div>
              <div className="mb-2 block">
                <Label htmlFor="medications" Medications" />
              </div>
              <TextInput
                id=" medications"
                type="medications"
				placeholder="Enter your current Mdeications"
              />
            </div>
			
			<div>
              <div className="mb-2 block">
                <Label htmlFor="surgeries" Surgeries" />
              </div>
              <TextInput
                id=" surgeries"
                type="surgeries"
				placeholder="Enter your Past Surgeries"
              />
            </div>
			
			<div>
              <div className="mb-2 block">
                <Label htmlFor="familyHistory" Family History" />
              </div>
              <TextInput
                id=" familyHistory"
                type="familyHistory"
				placeholder="Enter your Family History including diseases or any illness"
              />
            </div>
			
			<div>
              <div className="mb-2 block">
                <Label htmlFor="addictions" Addictions" />
              </div>
              <TextInput
                id=" addictions"
                type="addictions"
				placeholder="Enter any Addictions related to Alcohol or Drugs"
              />
            </div>
			
			<div>
              <div className="mb-2 block">
                <Label htmlFor="questionnaire" Questionnaire" />
              </div>
              <TextInput
                id=" questionnaire"
                type="questionnaire"
				placeholder="Enter your answers for the following: 
				1. Any Pain 
				2. Headache
				3. Fever 
				4. Upset Stomach"
              />
            </div>
			
			<div>
              <div className="mb-2 block">
                <Label htmlFor="symptoms" Symptoms" />
              </div>
              <TextInput
                id=" symptoms"
                type="symptoms"
				placeholder="Enter other Symptoms in detail"
                required={true}
              />
            </div>
			
			<div>
              <div className="mb-2 block">
                <Label htmlFor="signature" Signature" />
              </div>
              <TextInput
                id=" signature"
                type="signature"
				placeholder="Enter your Full Name"
                required={true}
              />
            </div>
			
            <Button type="submit">Submit</Button>
          </form>
        </main>
      </div>
    </Layout>
  )
}    