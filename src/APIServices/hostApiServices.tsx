import {httpClient as shellHttpClient} from './httpClient';

export const hostApiServices = shellHttpClient().injectEndpoints({
  endpoints: (builder: any) => ({
    //----------- Start

    getApplicantProfile: builder.query({
      query: (data: any) => ({
        url: `/szhp/applicantprofile/ApplicantProfile/${data?.id}`,
        method: 'GET',
      }),
    }),

    getContentMostUsedServicesList: builder.mutation({
      query: (data: any) => ({
        url: `/moei/CMSMenuList/ContentList`,
        method: 'POST',
        data,
      }),
    }),

    updateApplicantProfile: builder.mutation({
      query: (data: any) => ({
        url: `/szhp/applicantprofile/ApplicantProfile/${data?.id}`,
        method: 'PATCH',
        data: data?.data,
      }),
    }),

    deleteFile: builder.mutation({
      query: (data: {id: string}) => ({
        url: `/common/attachment/Attachment/${data.id}`,
        method: 'DELETE',
      }),
    }),

    submitEmergencyVisit: builder.mutation({
      query: (data: any) => ({
        url: `/szhpmgmt/emergencyHousingVisit/EmergencyHousingVisit`,
        method: data?.id ? 'PATCH' : 'POST',
        data: data,
      }),
    }),

    //----------- End
  }),
});

export const {
  useGetContentMostUsedServicesListMutation,
  useLazyGetApplicantProfileQuery,
  useUpdateApplicantProfileMutation,
  useDeleteFileMutation,
  useSubmitEmergencyVisitMutation,
} = hostApiServices;
