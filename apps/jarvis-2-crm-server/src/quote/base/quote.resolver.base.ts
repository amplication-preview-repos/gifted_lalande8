/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { Quote } from "./Quote";
import { QuoteCountArgs } from "./QuoteCountArgs";
import { QuoteFindManyArgs } from "./QuoteFindManyArgs";
import { QuoteFindUniqueArgs } from "./QuoteFindUniqueArgs";
import { DeleteQuoteArgs } from "./DeleteQuoteArgs";
import { QuoteService } from "../quote.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Quote)
export class QuoteResolverBase {
  constructor(
    protected readonly service: QuoteService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Quote",
    action: "read",
    possession: "any",
  })
  async _quotesMeta(
    @graphql.Args() args: QuoteCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Quote])
  @nestAccessControl.UseRoles({
    resource: "Quote",
    action: "read",
    possession: "any",
  })
  async quotes(@graphql.Args() args: QuoteFindManyArgs): Promise<Quote[]> {
    return this.service.quotes(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Quote, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Quote",
    action: "read",
    possession: "own",
  })
  async quote(
    @graphql.Args() args: QuoteFindUniqueArgs
  ): Promise<Quote | null> {
    const result = await this.service.quote(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Quote)
  @nestAccessControl.UseRoles({
    resource: "Quote",
    action: "delete",
    possession: "any",
  })
  async deleteQuote(
    @graphql.Args() args: DeleteQuoteArgs
  ): Promise<Quote | null> {
    try {
      return await this.service.deleteQuote(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}